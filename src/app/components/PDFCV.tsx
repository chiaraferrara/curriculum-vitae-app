import React from "react";
import { Document, Page, Text, View, StyleSheet, Link } from "@react-pdf/renderer";
import { experienceData, educationData, projects } from "../utils";

// Register fonts if needed
// Font.register({
//   family: "Roboto",
//   src: "https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxP.ttf",
// });

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: "#ffffff",
    fontFamily: "Helvetica",
  },
  header: {
    marginBottom: 30,
    borderBottom: "2px solid #1a1a1a",
    paddingBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#6b7280",
    marginBottom: 8,
  },
  contact: {
    fontSize: 12,
    color: "#6b7280",
    marginTop: 8,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 15,
    borderBottom: "1px solid #e5e7eb",
    paddingBottom: 8,
  },
  item: {
    marginBottom: 15,
  },
  itemHeader: {
    marginBottom: 5,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 3,
  },
  itemDate: {
    fontSize: 11,
    color: "#6b7280",
    fontWeight: "bold",
    marginBottom: 4,
  },
  itemDescription: {
    fontSize: 11,
    color: "#6b7280",
    lineHeight: 1.5,
    marginTop: 4,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginTop: 10,
  },
  skillChip: {
    backgroundColor: "#f9fafb",
    border: "1px solid #e5e7eb",
    borderRadius: 4,
    padding: "4px 8px",
    fontSize: 9,
    color: "#1a1a1a",
  },
  projectItem: {
    marginBottom: 12,
    paddingBottom: 12,
    borderBottom: "1px solid #f3f4f6",
  },
  projectTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 4,
  },
  projectDescription: {
    fontSize: 10,
    color: "#6b7280",
    lineHeight: 1.4,
    marginBottom: 6,
  },
  projectTech: {
    fontSize: 9,
    color: "#4b5563",
    fontStyle: "italic",
  },
});

const PDFDocument = () => (
  <Document>
    <Page size="A4" style={styles.page} wrap>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Chiara Ferrara</Text>
        <Text style={styles.subtitle}>Front End Developer</Text>
        <Text style={styles.contact}>
          ferrarachiara4@gmail.com | Palermo, Italy
        </Text>
        <View style={{ flexDirection: "row", gap: 8, marginTop: 4 }}>
          <Text style={styles.contact}>
            LinkedIn:{" "}
          </Text>
          <Link
            src="https://www.linkedin.com/in/chiara-ferrara-41273a265/"
            style={{ ...styles.contact, color: "#2563eb", textDecoration: "underline" }}
          >
            linkedin.com/in/chiara-ferrara-41273a265/
          </Link>
          <Text style={styles.contact}> | </Text>
          <Text style={styles.contact}>
            GitHub:{" "}
          </Text>
          <Link
            src="https://github.com/chiaraferrara"
            style={{ ...styles.contact, color: "#2563eb", textDecoration: "underline" }}
          >
            github.com/chiaraferrara
          </Link>
        </View>
      </View>

      {/* About */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.itemDescription}>
          I&apos;m a Front End Developer who is building up skills in both front end and back end development. 
          I have a passion for learning new technologies and I am always looking for new opportunities to learn. 
          I love problem solving and I am always looking for new challenges. I am currently working as a 
          Front End Developer at TopNetwork S.p.A.
        </Text>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        {experienceData.jobs.map((job, index) => (
          <View key={index} style={styles.item} wrap={false}>
            <View style={styles.itemHeader}>
              <Text style={styles.itemTitle}>
                {job.title} at {job.company}
              </Text>
              <Text style={styles.itemDate}>{job.years}</Text>
            </View>
            {job.description && (
              <Text style={styles.itemDescription}>{job.description}</Text>
            )}
          </View>
        ))}
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        {educationData.schools.map((school, index) => (
          <View key={index} style={styles.item} wrap={false}>
            <View style={styles.itemHeader}>
              <Text style={styles.itemTitle}>{school.name}</Text>
              <Text style={styles.itemDate}>{school.years}</Text>
            </View>
            <Text style={styles.itemDescription}>{school.degree}</Text>
            <Text style={[styles.itemDescription, { marginTop: 4, fontSize: 10 }]}>
              {school.skills}
            </Text>
          </View>
        ))}
      </View>

      {/* Projects */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projects</Text>
        {projects.map((project, index) => (
          <View key={index} style={styles.projectItem} wrap={false}>
            <View style={styles.itemHeader}>
              <Text style={styles.projectTitle}>{project.name}</Text>
              <Text style={styles.itemDate}>{project.date}</Text>
            </View>
            <Text style={styles.projectDescription}>{project.description}</Text>
            {project.features && project.features.length > 0 && (
              <View style={{ marginTop: 4 }}>
                {project.features.map((feature, fIndex) => (
                  <Text key={fIndex} style={[styles.itemDescription, { fontSize: 9 }]}>
                    • {feature}
                  </Text>
                ))}
              </View>
            )}
            <View style={styles.skillsContainer}>
              {project.technologies?.map((tech, techIndex) => (
                <Text key={techIndex} style={styles.skillChip}>
                  {tech}
                </Text>
              ))}
            </View>
          </View>
        ))}
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.skillsContainer}>
          <Text style={styles.skillChip}>HTML5</Text>
          <Text style={styles.skillChip}>CSS</Text>
          <Text style={styles.skillChip}>React</Text>
          <Text style={styles.skillChip}>Next.js</Text>
          <Text style={styles.skillChip}>TypeScript</Text>
          <Text style={styles.skillChip}>JavaScript</Text>
          <Text style={styles.skillChip}>SQL</Text>
          <Text style={styles.skillChip}>PostgreSQL</Text>
          <Text style={styles.skillChip}>Angular</Text>
          <Text style={styles.skillChip}>Docker</Text>
          <Text style={styles.skillChip}>MongoDB</Text>
          <Text style={styles.skillChip}>PHP</Text>
          <Text style={styles.skillChip}>Java</Text>
          <Text style={styles.skillChip}>Python</Text>
          <Text style={styles.skillChip}>React Native</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default PDFDocument;
