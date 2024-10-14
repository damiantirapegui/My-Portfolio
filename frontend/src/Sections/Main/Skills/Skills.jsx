import "./Skills.css";
import "../../../index.css";

export function Skills() {
  return (
    <>
      <aside className="skills-container" id="skills">
        <div className="skills-box">
          <h3 className="skills-headline">Skills</h3>
          <ul className="skills-list">
            <li className="li">Javasript</li>
            <li className="li">HTML</li>
            <li className="li">CSS</li>
            <li className="li">Node.js</li>
            <li className="li">DynamoDb</li>
            <li className="li">neDB</li>
            <li className="li">AWS</li>
            <li className="li">Figma</li>
            <li className="li">Postman</li>
            <li className="li">UX/UI Design</li>
            <li className="li">Fullstack Development</li>
          </ul>
        </div>
      </aside>

      <article className="skills-description">
        <div className="card">
          <h3>Frontend</h3>
          <p>
            I have experience in both frontend and backend development. On the
            frontend, I am proficient in <strong>JavaScript</strong>,{" "}
            <strong>HTML</strong>, and <strong>CSS</strong>. I use these
            technologies to build responsive and dynamic web applications. I
            have also worked with design tools like
            <strong>Figma</strong> to create clean and user-friendly interfaces.
          </p>
        </div>
        <div className="card">
          <h3>Backend</h3>
          <p>
            In terms of backend, I am comfortable with <strong>Node.js</strong>{" "}
            for building server-side applications and have used databases like{" "}
            <strong>DynamoDB</strong> and <strong>neDB</strong> for data
            storage. Additionally, I am familiar with <strong>AWS</strong>{" "}
            services such as Lambda, API Gateway, and S3, which help me build
            scalable, serverless applications.
          </p>
        </div>
        <div className="card">
          <h3>Api Testing</h3>
          <p>
            I have also used <strong>Postman</strong> to test APIs and ensure
            smooth integration between frontend and backend. Finally, I am
            passionate about <strong>UX/UI Design</strong> and constantly strive
            to improve the user experience of the applications I develop.
          </p>
        </div>
        <div className="card">
          <h3>Fullstack</h3>
          <p>
            By the time I start my LIA, I will have completed my fullstack
            development course, enabling me to work both as a frontend, backend,
            or fullstack developer during my internship. This includes building
            and maintaining complete applications from frontend to backend.
          </p>
        </div>
      </article>
    </>
  );
}
