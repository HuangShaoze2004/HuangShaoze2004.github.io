
<div class="exp-card">

#### Algorithm Engineer: Consumable Classification and Doctor Identification for Operating Rooms

<div class="exp-meta">Internship · 上海和光同坤科技有限公司 (Shanghai Heguang Tongkun Technology Co., Ltd.) · 2026.04–2026.06</div>

<div class="exp-body">

I independently developed an end-to-end real-time vision system for a hospital operating room (delivered and in use at a hospital in Kunming, Yunnan). The system runs two parallel modules on live **RTSP** video streams:

<ul class="exp-bullets">
<li><strong>Consumable classification:</strong> <strong>YOLO</strong> hand detection plus <strong>ByteTrack</strong> multi-object tracking; an <strong>IoU</strong> threshold decides when the hand enters the preset basket <strong>ROI</strong>, triggering a contact event that caches raw BGR frames in a ring buffer. A good/bad-frame gating model selects high-quality frames, and a <strong>41-class consumable classifier</strong> identifies the consumables, with configurable whitelist filtering.</li>
<li><strong>Doctor identification:</strong> a parallel identity-recognition track — <strong>YOLO11n</strong> person detection with <strong>ReID</strong> for cross-frame / cross-camera matching, plus <strong>InsightFace</strong> face recognition built on a doctor face-feature gallery with a <strong>KNN</strong> classifier for authentication.</li>
</ul>

I owned the full pipeline — data collection and annotation, algorithm design, model training and tuning, and Linux deployment.

<strong>Stack:</strong> Python, PyTorch, YOLO, ByteTrack, InsightFace, ReID, OpenCV, RTSP.

</div>

</div>

<div class="exp-card">

#### Edge Deployment Engineer: Intelligent Human-Presence Lighting Control on Jetson Nano

<div class="exp-meta">Internship · 重庆九畴能源科技有限公司 (Chongqing Jiuchou Energy Technology Co., Ltd.) · 2026.06–2026.07</div>

<div class="exp-body">

Built a lightweight intelligent human-presence sensing lighting control system on an <strong>NVIDIA Jetson Nano B01</strong> edge board. A CSI camera captures indoor frames; a fine-tuned <strong>YOLOv26n</strong> model detects and localizes human targets in real time. When a person is present, a <strong>GPIO</strong> high-level signal drives a relay to switch the lights on; when the person leaves, the signal is delayed and cut so the lights turn off automatically. To fit the limited compute budget, I converted the trained PyTorch model to a <strong>TensorRT</strong> engine with <strong>FP16</strong> quantization and layer fusion, achieving stable <strong>25–30 FPS</strong> inference at 720P, and resolved memory-growth and thermal-throttling issues for reliable unattended operation.

<strong>Stack:</strong> TensorRT, OpenCV, NVIDIA Jetson Nano B01, Linux, GPIO, CSI, ONNX.

</div>

</div>

<div class="exp-card">

#### Bachelor's Thesis: Intelligent Optimization for C–H Selective Borylation via Bayesian Optimization

<div class="exp-meta">Undergraduate thesis · Anhui University of Technology · 2025–2026</div>

<div class="exp-body">

Traditional development of chemical synthesis routes relies heavily on trial and error, which is costly and slow. This thesis focuses on **C–H selective borylation** and builds an **automated machine-learning workflow** to search efficiently in a large chemical space for reaction conditions with **high selectivity and yield**.

<ul class="exp-bullets">
<li><strong>Features & data:</strong> Parsed and digitized molecular structures in the target chemical space; used <strong>256-bit Morgan fingerprints</strong> as inputs for model training.</li>
<li><strong>Surrogate modeling:</strong> Built a <strong>Gaussian process regression (GPR)</strong> predictor for reaction outcomes and implemented a full <strong>cross-validation</strong> pipeline in Python to support reliable generalization.</li>
<li><strong>Bayesian optimization:</strong> Implemented an end-to-end BO loop with the <strong>expected improvement (EI)</strong> acquisition function to balance exploration and exploitation, recommending <strong>24 high-potential experiments per iteration</strong> to shorten the experimental cycle.</li>
</ul>

<strong>Stack:</strong> AI for science, Bayesian optimization, GPR, molecular feature engineering, Python.

</div>

</div>

<div class="exp-card">

#### National Undergraduate Innovation Program: Wet Colloidal Templating for DUV Plasmonic Al Nanohole Arrays

<div class="exp-body">

Aluminum’s strong adhesion makes it hard to fabricate large-area, small-period deep-UV plasmonic nanohole arrays. As project leader, I proposed a <strong>wet colloidal templating</strong> strategy: gas–liquid interface self-assembly combined with etching and electron-beam evaporation to obtain uniform small-period (<strong>240 nm, 300 nm</strong>) Al hole arrays. I built <strong>FDTD</strong> models to explain multi-band electric-field enhancement across interfaces, and combined morphology characterization with biochemical tests to validate strong label-free fluorescence enhancement. This work led to <strong>one SCI publication</strong> (second author).

<strong>Stack:</strong> Nanomaterial fabrication, reaction ion etching (RIE), FDTD, SEM/XPS, plasmonics.

</div>

</div>

<div class="exp-card">

#### Self-Directed Study: Deep Learning for Object Detection in Materials and Beyond

<div class="exp-body">

I started self-studying deep learning during the winter break in January 2025, focusing on the YOLO family in computer vision. I customized architectures (e.g., attention, feature fusion, loss design), applied models to materials-related detection tasks, and published SCI papers as first/corresponding and second author. I also collaborated with peers from computer science on further YOLO improvements.

<strong>Stack:</strong> PyTorch, YOLOv11, computer vision, instance segmentation.

</div>

</div>

