export const metadata = {
  name: "Amit Kumar",
  title: "Semiconductor & Electronics Engineer",
  specialization: "Electronics engineer specializing in semiconductor fabrication, thin-film technology, and embedded systems, transitioning into VLSI and RTL design.",
  email: "amitkr26@example.com",
  github: "https://github.com/amitkr26",
  linkedin: "https://linkedin.com/in/amitkr26",
};

export const researchData = {
  title: "FeCo/CoFe Thin Film Fabrication on Flexible Substrates Using DC Magnetron Sputtering",
  abstract: "This research investigates the fabrication and characterization of Fe₆₀Co₄₀ and Co₉₀Fe₁₀ thin films deposited on flexible polyimide (PI) and PET substrates via DC Magnetron Sputtering. The study focuses on optimizing deposition parameters to achieve controlled magnetic anisotropy, saturation magnetization, and low coercivity for flexible spintronic sensor applications.",
  objective: "Optimize magnetic properties of FeCo/CoFe ferromagnetic alloy thin films on flexible polymer substrates for applications in flexible magnetoresistive sensors and spintronic devices.",
  materials: [
    { name: "Fe₆₀Co₄₀ (Iron-Cobalt)", role: "Ferromagnetic alloy target", thickness: "50-200 nm", properties: "High saturation magnetization (Bs ~2.4 T), high Curie temperature" },
    { name: "Co₉₀Fe₁₀ (Cobalt-Iron)", role: "Ferromagnetic alloy target", thickness: "50-150 nm", properties: "High anisotropy field, low coercivity" },
    { name: "Polyimide (PI)", role: "Flexible substrate", thickness: "50-125 µm", properties: "Thermal stability up to 400°C, high dielectric strength" },
    { name: "PET", role: "Flexible substrate", thickness: "100-200 µm", properties: "Low cost, optical transparency, limited thermal tolerance" },
  ],
  depositionParameters: {
    technique: "DC Magnetron Sputtering",
    basePressure: "5 × 10⁻⁶ Torr",
    workingPressure: "3 × 10⁻³ Torr (Ar)",
    substrateTemperature: "Room Temperature (25°C) to 300°C",
    targetToSubstrateDistance: "80 mm",
    sputteringPower: "50-150 W DC",
    depositionRate: "0.5-2 Å/s",
    gasFlow: "20 sccm Ar (99.999% purity)",
    substrateRotation: "10 rpm for uniformity",
  },
  workflow: [
    { step: "Substrate Preparation", details: "Flexible PI/PET substrates cleaned ultrasonically in acetone, isopropanol, and deionized water (10 min each). Dried in N₂ flow. Surface treatment via O₂ plasma (50 W, 2 min) to improve adhesion." },
    { step: "Vacuum System Pumpdown", details: "Chamber evacuated to base pressure 5 × 10⁻⁶ Torr using turbomolecular pump backed by rotary vane pump. Substrate heated to target temperature at 5°C/min ramp rate." },
    { step: "Pre-Sputtering", details: "Target surface cleaned by 5 min pre-sputtering with shutter closed. Removes surface oxides and contaminants. Power stabilized at target level." },
    { step: "Thin Film Deposition", details: "DC plasma ignited in Ar atmosphere. Deposition rate monitored via quartz crystal microbalance (QCM). Film thickness controlled by deposition time at calibrated rate." },
    { step: "Post-Deposition Annealing", details: "Selected samples annealed in vacuum at 200-400°C for 1 hour to study structural relaxation and magnetic property evolution." },
    { step: "Characterization", details: "Multi-technique characterization: XRD for phase identification, VSM for magnetic hysteresis, FMR for dynamic properties, FESEM/EDS for morphology and composition." },
  ],
  tools: [
    { name: "XRD (Rigaku Ultima IV)", technique: "Bragg-Brentano geometry, Cu Kα radiation (λ = 1.5406 Å)", measures: "Phase identification, crystallite size (Scherrer), lattice strain, texture analysis" },
    { name: "VSM (LakeShore 7400)", technique: "Room temperature hysteresis loops, ±2 T field range", measures: "Saturation magnetization (Ms), coercivity (Hc), remanence (Mr), squareness ratio" },
    { name: "FMR (Bruker E500)", technique: "X-band (9.5 GHz), in-plane and out-of-plane angular dependence", measures: "Gilbert damping constant (α), anisotropy field (Hk), resonance linewidth (ΔH)" },
    { name: "FESEM/EDS (Zeiss Gemini)", technique: "In-lens SE detector, 5-15 kV accelerating voltage", measures: "Surface morphology, film thickness cross-section, elemental composition mapping" },
    { name: "AFM (Bruker Dimension)", technique: "Tapping mode, 10 µm × 10 µm scan area", measures: "Surface roughness (Rq, Ra), grain size distribution, 3D topography" },
  ],
  results: {
    saturationMagnetization: "FeCo: ~2.1 T, CoFe: ~1.8 T (measured via VSM)",
    coercivity: "FeCo: 15-25 Oe, CoFe: 5-10 Oe (thickness dependent)",
    dampingConstant: "FeCo: α ≈ 0.008, CoFe: α ≈ 0.012 (FMR measured)",
    surfaceRoughness: "Rq < 1.5 nm for films ≤100 nm thickness (AFM)",
    crystalStructure: "BCC α-FeCo phase confirmed (XRD 2θ = 44.8°)",
    anisotropy: "In-plane uniaxial anisotropy observed, Hk = 50-80 Oe",
  },
  applications: [
    "Flexible magnetoresistive sensors for wearable electronics",
    "Magnetic field sensing in biomedical devices",
    "Spintronic logic devices on polymer substrates",
    "Micro-actuators and flexible MEMS systems",
    "Non-contact position and rotation sensing",
  ],
  futureScope: [
    "Investigate thickness-dependent magnetic properties in ultrathin regime (<20 nm)",
    "Study exchange bias effects in FeCo/CoFe bilayer structures",
    "Integrate films into flexible spin-valve device stacks",
    "Characterize high-frequency performance up to 40 GHz",
    "Develop transfer printing process for heterogeneous substrate integration",
  ],
};

export const toolchain = [
  {
    category: "Semiconductor & Fabrication",
    items: ["DC Magnetron Sputtering", "Thin Film Deposition", "Vacuum Systems", "Flexible Electronics", "Photolithography (Lrn)"],
  },
  {
    category: "Characterization",
    items: ["XRD", "VSM", "FMR", "AFM", "FESEM", "EDS"],
  },
  {
    category: "Embedded & Hardware",
    items: ["ESP32", "Arduino", "8051", "AVR", "Circuit Design", "PCB Design (Proteus)"],
  },
  {
    category: "Simulation & Analysis",
    items: ["MATLAB", "PSpice", "Multisim", "OriginPro", "Xilinx Vivado"],
  },
  {
    category: "Digital & VLSI",
    items: ["Verilog HDL", "Digital Logic Design", "RTL Simulation", "FSM Design", "Timing Analysis"],
  },
];

export const engineeringCaseStudies = [
  {
    id: "thin-film-research",
    title: "Magnetic Thin Films on Flexible Substrates",
    category: "semiconductor",
    problem: "Conventional rigid substrates limit applications of spintronic devices in wearable and biomedical systems. Flexible polymer substrates introduce challenges in film adhesion, stress management, and magnetic property retention under mechanical bending.",
    objective: "Optimize DC magnetron sputtering parameters to deposit FeCo/CoFe thin films on polyimide/PET substrates with controlled magnetic anisotropy and minimal substrate-induced degradation.",
    architecture: ["DC Magnetron Sputtering System", "Flexible Substrate Mount", "QCM Thickness Monitor", "In-situ Substrate Heater"],
    stack: ["DC Magnetron Sputtering", "Fe₆₀Co₄₀ Target", "Co₉₀Fe₁₀ Target", "Polyimide/PET Substrates", "XRD", "VSM", "FMR", "AFM", "FESEM/EDS"],
    implementation: "Thin films deposited at room temperature and 200°C substrate temperature. Working pressure 3 mTorr Ar at 20 sccm flow. DC power varied between 50-150W to study deposition rate effects on microstructure. Post-deposition vacuum annealing at 300°C for 1 hour performed on selected samples.",
    challenges: [
      "Film delamination on PET substrates at thickness >150 nm due to thermal stress mismatch",
      "Oxide layer formation on FeCo films exposed to ambient before characterization",
      "Substrate outgassing in vacuum affecting base pressure and film purity",
    ],
    decisions: [
      "Selected polyimide over PET for high-temperature deposition studies due to 400°C thermal stability",
      "Applied 2 min O₂ plasma treatment to improve film-substrate adhesion by 40%",
      "Used Ta capping layer (5 nm) to prevent oxidation of reactive FeCo films",
    ],
    results: {
      crystallinity: "BCC α-FeCo(110) peak at 44.8° confirmed phase purity",
      magnetism: "Ms = 2.1 T (FeCo), Hc = 18 Oe (100 nm film)",
      surfaceQuality: "Rq = 1.2 nm AFM roughness for 100 nm film on PI",
      bendingTest: "Magnetic properties retained after 1000 bending cycles at 10 mm radius",
    },
    validation: [
      "XRD pattern matched JCPDS 44-1433 for α-FeCo phase",
      "VSM hysteresis loops confirmed soft ferromagnetic behavior",
      "FMR linewidth analysis confirmed damping suitable for sensor applications",
      "Cross-section FESEM verified uniform film thickness across 2-inch substrate",
    ],
    improvements: [
      "Optimize Ta buffer layer thickness for improved adhesion",
      "Investigate oblique angle deposition for controlled anisotropy",
      "Scale deposition to 4-inch substrate for device fabrication",
      "Characterize magnetoresistance in patterned Hall bar structures",
    ],
  },
  {
    id: "esp32-cam-microscope",
    title: "ESP32-CAM Wireless Digital Microscope",
    category: "embedded",
    problem: "Commercial digital microscopes are expensive ($200-2000) and lack wireless streaming capability for remote material inspection in laboratory settings.",
    objective: "Design a low-cost (<$50) portable digital microscope using ESP32-CAM module with real-time wireless image streaming and adjustable optical parameters for material surface inspection.",
    architecture: "ESP32-CAM → OV2640 Sensor → WiFi AP/Station → WebSocket Server → Browser Client",
    stack: ["ESP32-CAM", "OV2640 2MP CMOS Sensor", "Arduino Framework", "WebSockets", "HTML/CSS/JS Frontend", "LED Ring Illumination", "3D-Printed Enclosure"],
    implementation: "Custom C++ firmware with OV2640 driver configuration for adjustable resolution (UXGA/SVGA/QQVGA), JPEG compression quality control, and exposure/gain tuning. WebSocket server handles bidirectional control and streaming. Frontend provides live viewport with capture and recording controls.",
    challenges: [
      "Limited PSRAM (8 MB) constrains buffer size for high-resolution capture",
      "WiFi throughput bottleneck at 54 Mbps limits framerate at UXGA resolution",
      "Heat dissipation from ESP32 during continuous streaming affects sensor noise",
    ],
    decisions: [
      "Implemented adaptive JPEG quality reduction to maintain 15+ fps at SVGA resolution",
      "Used WebSocket over HTTP for low-latency bidirectional control",
      "Added external antenna connector for improved WiFi range in lab environments",
      "Chose 3D-printed ABS enclosure with ventilation channels for thermal management",
    ],
    results: {
      resolution: "SVGA (800×600) at 15 fps, UXGA (1600×1200) at 5 fps",
      "latency": "120-150 ms end-to-end streaming delay",
      magnification: "10×-200× optical zoom range",
      "powerConsumption": "180 mA at 5V (LED off), 320 mA (LED full brightness)",
      "cost": "Under $45 in components",
    },
    validation: [
      "Resolution test target confirmed 5 µm line pair discrimination at 200×",
      "Color calibration performed using Macbeth ColorChecker chart",
      "Continuous operation tested for 8+ hours without failure",
    ],
    improvements: [
      "Integrate motorized focus control using stepper motor",
      "Add machine vision features (edge detection, particle counting)",
      "Explore ESP32-S3 for improved processing and PSRAM capacity",
      "Develop mobile companion app for field use",
    ],
  },
  {
    id: "arduino-line-follower",
    title: "PID-Controlled Line Follower Robot",
    category: "embedded",
    problem: "Basic line follower robots using simple threshold detection fail on curved tracks, intersections, and varying surface reflectivity, limiting their use in industrial material transport.",
    objective: "Design an autonomous line-following robot using PID control algorithm with IR sensor array for accurate path tracking on complex track geometries.",
    architecture: "5× IR Sensor Array → Arduino Uno → Dual H-Bridge → DC Gear Motors",
    stack: ["Arduino Uno", "5-Channel IR Sensor Module", "L298N H-Bridge", "DC Gear Motors (100 RPM)", "Li-Po 7.4V Battery", "PID Library"],
    implementation: "Five IR sensors provide weighted position error signal. PID controller computes motor differential correction. Kp, Ki, Kd parameters tuned via Ziegler-Nichols method. PWM output drives H-bridge with 0-255 range per motor.",
    challenges: [
      "Sensor crosstalk at high sampling rates required multiplexed readout sequence",
      "Surface reflectivity variations caused false readings on glossy tracks",
      "Motor backlash introduced oscillation in PID response at low speeds",
    ],
    decisions: [
      "Used weighted average of all 5 sensors instead of binary threshold for smoother position estimation",
      "Applied moving average filter (window size 3) to sensor readings before PID computation",
      "Implemented integral windup prevention with clamping at ±100 PWM units",
    ],
    results: {
      "maxSpeed": "0.8 m/s on straight track",
      trackingError: "±2 mm at 0.3 m/s on 90° turns",
      minTurnRadius: "15 cm",
      batteryLife: "45 min continuous operation (2000 mAh)",
    },
    validation: [
      "Completed standard F.I.R.S.T. track without derailment in 12 seconds",
      "Tested on white/black and matte/glossy surface combinations",
      "PID step response measured with 15% overshoot and 0.3 s settling time",
    ],
    improvements: [
      "Replace IR with camera-based vision for track mapping",
      "Implement PID auto-tuning via relay feedback method",
      "Add Bluetooth telemetry for real-time PID parameter tuning",
    ],
  },
  {
    id: "vlsi-digital-design",
    title: "RTL Digital Logic Core Development",
    category: "digital",
    problem: "Need for verified digital logic cores for educational FPGA prototyping of basic signal processing and control systems.",
    objective: "Develop and functionally verify RTL modules including finite state machines, ALU, and serial communication interfaces using Verilog HDL.",
    architecture: "Verilog RTL → ModelSim Functional Simulation → Xilinx Vivado Synthesis → FPGA Bitstream",
    stack: ["Verilog HDL (IEEE 1364-2001)", "ModelSim Intel Starter Edition", "Xilinx Vivado ML Edition", "Basys 3 FPGA Board (Artix-7)"],
    implementation: "Designed parameterized ALU with 8 operations (ADD, SUB, AND, OR, XOR, NOR, SHL, SHR). Implemented Mealy and Moore FSM architectures for serial data detection. UART transmitter module designed with configurable baud rate. All modules verified with self-checking testbenches.",
    challenges: [
      "Timing closure issues at 100 MHz target due to combinational depth in ALU critical path",
      "Race conditions in FSM state encoding required Gray code transition strategy",
    ],
    decisions: [
      "Pipelined ALU design: 2-stage pipeline (execute + writeback) for 100 MHz timing closure",
      "One-hot FSM encoding selected for low-power idle states",
      "Synchronous reset used exclusively to avoid metastability in FPGA implementation",
    ],
    results: {
      aluMaxFreq: "120 MHz (post place-and-route)",
      aluUtilization: "128 LUTs, 64 FFs on Artix-7",
      uartBaudError: "<1% at 115200 baud (100 MHz system clock)",
      verification: "100% toggle coverage, 95% line coverage",
    },
    validation: [
      "All ALU operations verified against golden reference model in testbench",
      "UART transmitter loopback tested at 9600, 19200, 115200 baud rates",
      "FSM sequences validated with protocol analyzer on FPGA output pins",
    ],
    improvements: [
      "Add AXI4-Stream interface for modular integration",
      "Implement scan chain for production testability",
      "Extend ALU to support multiply and divide operations",
      "Develop SPI master peripheral for sensor interface",
    ],
  },
];

export const embeddedProjects = [
  {
    id: "esp32-cam-microscope",
    title: "ESP32-CAM Digital Microscope",
    summary: "Low-cost wireless digital microscope for material inspection using ESP32-CAM with real-time streaming.",
    tags: ["ESP32", "Embedded C", "WebSockets", "Wireless"],
  },
  {
    id: "arduino-line-follower",
    title: "Line Follower Robot (PID)",
    summary: "Autonomous robot using PID-controlled IR sensor array for industrial track navigation.",
    tags: ["Arduino", "PID Control", "Embedded", "Robotics"],
  },
  {
    id: "sensor-interface",
    title: "Multisensor Data Acquisition",
    summary: "8051-based multi-sensor interface for temperature, humidity, and gas concentration monitoring.",
    tags: ["8051", "Embedded C", "I2C", "UART"],
  },
  {
    id: "pcb-design",
    title: "Custom Sensor Node PCB",
    summary: "Designed and fabricated 2-layer PCB for ESP32-based environmental sensor node in Proteus.",
    tags: ["PCB Design", "Proteus", "ESP32", "KiCad"],
  },
];

export const currentFocus = [
  "RTL Design & Verification using Verilog",
  "Digital Logic Synthesis and Timing Analysis",
  "FSM and Datapath Architecture Design",
  "Communication Protocol Implementation (UART, SPI, I2C)",
  "FPGA Prototyping on Artix-7 Platform",
  "VLSI Design Flow: Simulation → Synthesis → P&R",
];
