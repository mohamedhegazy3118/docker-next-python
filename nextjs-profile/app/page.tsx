const COURSES = [
  "Machine Learning",
  "Deep Learning Architectures",
  "Computer Vision",
  "Natural Language Processing",
  "Data Engineering",
  "Cloud Computing",
  "Software Engineering"
];

export default function Home() {
  return (
    <main style={{
      display: "grid",
      gap: "2rem",
      padding: "3rem",
      background: "rgba(15, 23, 42, 0.85)",
      borderRadius: "24px",
      maxWidth: "960px",
      boxShadow: "0 20px 45px rgba(2, 132, 199, 0.35)"
    }}>
      <section style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "2rem"
      }}>
        <img
          src="/1.jpg"
          alt="Mohammed Hegazy portrait"
          style={{
            width: "180px",
            height: "180px",
            borderRadius: "9999px",
            objectFit: "cover",
            border: "4px solid #38bdf8",
            boxShadow: "0 12px 30px rgba(56, 189, 248, 0.4)"
          }}
        />
        <div>
          <h1 style={{ fontSize: "2.75rem", marginBottom: "0.5rem" }}>
            Mohammed Hegazy
          </h1>
          <p style={{ fontSize: "1.25rem", margin: 0, color: "#38bdf8" }}>
            محمد عبد المجيد محمد محمد حجازى
          </p>
          <ul style={{
            listStyle: "none",
            margin: "1.25rem 0 0",
            padding: 0,
            display: "grid",
            gap: "0.5rem",
            fontSize: "1.1rem",
            lineHeight: 1.8
          }}>
            <li>
              <strong>ID:</strong> 20100221
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:mohammed.hegazy@aiu.edu.eg">
                mohammed.hegazy@aiu.edu.eg
              </a>
            </li>
            <li>
              <strong>Program & Track:</strong> هندسة الذكاء الاصطناعى – Artificial Intelligence Engineering
            </li>
            <li>
              <strong>Mobile:</strong>{" "}
              <a href="tel:+201124788883">01124788883</a>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>Coursework</h2>
        <ul style={{
          listStyle: "none",
          padding: 0,
          display: "grid",
          gap: "0.75rem"
        }}>
          {COURSES.map((course) => (
            <li
              key={course}
              style={{
                padding: "1rem 1.25rem",
                borderRadius: "16px",
                background: "rgba(30, 64, 175, 0.5)",
                border: "1px solid rgba(56, 189, 248, 0.35)",
                backdropFilter: "blur(12px)",
                fontSize: "1.05rem"
              }}
            >
              {course}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>Contact</h2>
        <p style={{ fontSize: "1.05rem", lineHeight: 1.8 }}>
          Feel free to reach out through email or phone for collaboration on AI
          research and projects. I am passionate about creating intelligent
          systems that make a real impact.
        </p>
      </section>
    </main>
  );
}
