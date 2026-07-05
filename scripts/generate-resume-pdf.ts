import PDFDocument from "pdfkit";
import { createWriteStream } from "fs";
import { join } from "path";
import {
  siteConfig,
  workExperience,
  projects,
  skillGroups,
} from "../src/data/portfolio";

const outputPath = join(process.cwd(), "public", "JahanzaibImran.pdf");

const doc = new PDFDocument({ margin: 50, size: "A4" });
const stream = createWriteStream(outputPath);
doc.pipe(stream);

const primary = "#312e81";
const text = "#1e293b";
const muted = "#64748b";

function heading(title: string) {
  doc.moveDown(0.5).fillColor(primary).fontSize(11).font("Helvetica-Bold").text(title.toUpperCase());
  doc.moveDown(0.3).strokeColor("#e2e8f0").lineWidth(1).moveTo(50, doc.y).lineTo(545, doc.y).stroke();
  doc.moveDown(0.5);
}

function body(textContent: string, options?: { indent?: number }) {
  doc.fillColor(text).fontSize(10).font("Helvetica").text(textContent, {
    width: 495,
    indent: options?.indent ?? 0,
    lineGap: 2,
  });
}

// Header
doc.fillColor(primary).fontSize(22).font("Helvetica-Bold").text(siteConfig.name);
doc.fillColor(muted).fontSize(12).font("Helvetica").text("Senior Full Stack · AI · Cloud Engineer");
doc.moveDown(0.3);
doc.fillColor(text).fontSize(10).text(siteConfig.subheading, { width: 495, lineGap: 2 });
doc.moveDown(0.5);
doc
  .fillColor(muted)
  .fontSize(9)
  .text(
    `${siteConfig.email}  |  ${siteConfig.location}  |  linkedin.com/in/jahanzaib5887  |  github.com/JahanzaibImran`
  );

heading("Professional Summary");
body(
  "Full Stack Engineer with 4+ years building scalable SaaS platforms, AI-powered applications, Web3 products, and enterprise backends. Specializes in React/Next.js, NestJS, AWS, and production LLM systems including RAG, AI agents, and workflow automation. Proven track record shipping products used by thousands of users worldwide."
);

heading("Experience");
for (const job of workExperience) {
  doc.fillColor(text).fontSize(11).font("Helvetica-Bold").text(`${job.role} — ${job.company}`);
  doc.fillColor(muted).fontSize(9).font("Helvetica").text(job.duration);
  doc.moveDown(0.2);
  for (const achievement of job.achievements) {
    body(`• ${achievement}`, { indent: 10 });
  }
  doc.fillColor(muted).fontSize(8).text(`Technologies: ${job.technologies.join(", ")}`, { width: 495 });
  doc.moveDown(0.6);
}

heading("Selected Projects");
for (const project of projects.slice(0, 4)) {
  doc.fillColor(text).fontSize(10).font("Helvetica-Bold").text(project.title);
  body(project.solution);
  doc.fillColor(muted).fontSize(8).text(project.stack.join(" · "), { width: 495 });
  if (project.demo) {
    doc.fillColor(primary).fontSize(8).text(project.demo);
  }
  doc.moveDown(0.5);
}

heading("Technical Skills");
for (const group of skillGroups) {
  doc.fillColor(text).fontSize(9).font("Helvetica-Bold").text(group.title);
  body(group.skills.join(", "));
  doc.moveDown(0.3);
}

heading("Availability");
body(
  "Available for senior engineering roles, contract work, and remote opportunities worldwide. Open to AI, SaaS, cloud, and Web3 product builds."
);

doc.end();

stream.on("finish", () => {
  console.log(`Resume PDF generated: ${outputPath}`);
});
