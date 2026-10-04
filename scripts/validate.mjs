import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const output = path.join(root, "_site");
const indexPath = path.join(output, "index.html");
const html = await readFile(indexPath, "utf8");

const assertions = [
  [html.includes('<html lang="en"'), "Document language is set"],
  [html.includes('id="about"'), "About section exists"],
  [html.includes('id="research"'), "Research section exists"],
  [html.includes('id="publications"'), "Publications section exists"],
  [html.includes('id="projects"'), "Projects section exists"],
  [html.includes('id="honors"'), "Honors section exists"],
  [html.includes('id="cv"'), "CV section exists"],
  [html.includes('id="contact"'), "Contact section exists"],
  [html.includes("0009-0000-4677-8713"), "ORCID is present"],
  [html.includes("application/ld+json"), "Person structured data exists"],
  [html.includes('rel="canonical"'), "Canonical URL exists"],
  [!html.toLowerCase().includes(".pdf"), "No PDF is linked or referenced"],
  [!html.includes("IELTS"), "Excluded IELTS content is absent"],
  [!html.includes("Luo Minmin"), "PI names are absent"],
];

for (const [passed, label] of assertions) {
  if (!passed) throw new Error(`Validation failed: ${label}`);
  console.log(`✓ ${label}`);
}

// 递归确认最终发布目录中没有 PDF，避免源简历或其他 PDF 被误发布。
async function assertNoPdf(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) await assertNoPdf(entryPath);
    if (entry.isFile() && entry.name.toLowerCase().endsWith(".pdf")) {
      throw new Error(`Validation failed: PDF found in output: ${entryPath}`);
    }
  }
}

await assertNoPdf(output);

const goatCodeMatch = html.match(/data-goatcounter="([^"]+)"/);
if (goatCodeMatch) {
  if (!/^https:\/\/[a-z0-9-]+\.goatcounter\.com\/count$/i.test(goatCodeMatch[1])) {
    throw new Error("Validation failed: GoatCounter endpoint is malformed");
  }
  console.log("✓ GoatCounter endpoint is valid");
} else {
  console.log("✓ GoatCounter is safely disabled until a site code is configured");
}

console.log("\nAll site validation checks passed.");
