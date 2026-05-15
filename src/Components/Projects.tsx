import { PROJECTS } from "../constants";
import { styles } from "../styles";

export function Projects() {
  return (
    <section id="projects" className="page-section" style={styles.section}>
      <div className="section-header" style={styles.sectionHeader}>
        <div>
          <h2 style={styles.sectionTitle}>Featured Projects</h2>
          <p style={styles.sectionSub}>Selected engineering achievements.</p>
        </div>
        <a href="#" style={styles.viewAll}>
          VIEW_ALL_REPOS -&gt;
        </a>
      </div>

      <div className="projects-grid" style={styles.projectsGrid}>
        {PROJECTS.map((p) => (
          <div key={p.title} style={styles.projectCard}>
            <div style={styles.projectThumb}>
              <span style={styles.thumbIcon}>[]</span>
            </div>
            <div style={styles.projectBody}>
              <div style={styles.tagsRow}>
                {p.tags.map((tag, i) => (
                  <span
                    key={tag}
                    style={{
                      ...styles.tag,
                      borderColor: p.tagColors[i],
                      color: p.tagColors[i],
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3
                style={{
                  ...styles.projectTitle,
                  color: p.titleColor || "#E2E8F0",
                }}
              >
                {p.title}
              </h3>
              <p style={styles.projectDesc}>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
