import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "DigiLoCS — Physics-Informed Digital Twin",
    category: "Computational Pharmacology & Digital Twin Modeling",
    tools: "R, PBPK (PK-Sim), QSAR, Nelder-Mead Optimization, Sobol Sensitivity Analysis",
    image: `${import.meta.env.BASE_URL}images/digilocs.png`,
  },
  {
    title: "Dynamic Mechanical Stimulation Platform for Vascular Tissue Models",
    category: "Organ-on-Chip Design & Vascular Mechanobiology",
    tools: "ABAQUS (FEA), PDMS Soft Lithography, CellASIC Pneumatic System, ROS Quantification",
    image: `${import.meta.env.BASE_URL}images/vascular-chip.png`,
  },
  {
    title: "Physics-Preserved Fluid Dynamics (ASCC Framework)",
    category: "Physics-Informed Machine Learning & CFD",
    tools: "PyTorch, CUDA, SPH, HRNet Architecture, Voxel Resampling",
    image: `${import.meta.env.BASE_URL}images/fluid-ascc.png`,
  },
  {
    title: "Affordable Myoelectric Prosthetic Arm",
    category: "Biomedical Design & Additive Manufacturing",
    tools: "SolidWorks, 3D Printing (FDM), EMG Sensors, MATLAB",
    image: `${import.meta.env.BASE_URL}images/Myoelectric.png`,
  },
  {
    title: "Assessment of Hyperelastic Constitutive Models",
    category: "Simulation & Structural Analysis",
    tools: "SolidWorks, ANSYS, MATLAB",
    image: `${import.meta.env.BASE_URL}images/hyperelastic.png`,
  },
  {
    title: "Thermoacoustic Driven Pulse Tube Cryocooler",
    category: "Thermal Systems Design & Simulation",
    tools: "ANSYS, SolidWorks, CAD Modeling, Fabrication",
    image: `${import.meta.env.BASE_URL}images/cryocooler.png`,
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work & Publications</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
