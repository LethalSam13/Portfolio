import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Production Engineer</h4>
                <h5>Shree Ambica Auto Sales & service</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Designed SolidWorks fixture sets and operated CNC routers in-house, cutting lead time by 25%.
              Designed and 3D-printed (FDM/SLA) polymer spool-valve prototypes verified via XRCT and optical inspection.
              Applied Lean and Six Sigma principles to improve cycle times and operator safety.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Mechanical Engineering Intern</h4>
                <h5>Verimont Technologies (Drexel-Ford CoLo)</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Led SolidWorks design of a steerable catheter system with coil-reinforced shafts optimized for cardiovascular performance.
              Selected DC servo motors and cable-driven actuators; validated motion performance on a custom benchtop fixture.
              Applied GD&T and tolerance stack-up to achieve 99.8% Cpk on critical shaft dimensions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Material & Process QC Engineer</h4>
                <h5>Eurofins PSS Mid Atlantic LLC</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Managed IQ/OQ/PQ validation of 3+ automated lab instruments (XRCT, DSC), achieving 100% audit readiness.
              Authored 15+ SOPs and maintained Windchill PLM with version-controlled CAD and material documentation.
              Conducted failure analysis on 100+ specimens, improving data retrieval speed by 30%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
