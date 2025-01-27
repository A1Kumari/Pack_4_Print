# **Pack4Print**  
The Ultimate Image Packing Solution for Print Optimization  

Pack4Print is a powerful, intuitive web app designed to simplify the process of arranging and printing images. Built with advanced technologies including React, TypeScript, Redux, and React Konva, Pack4Print is a **Progressive Web App (PWA)** that offers a responsive, offline-capable experience.  

Whether you're printing an assortment of images in various dimensions or need precise arrangements for specific photo sizes, Pack4Print uses a cutting-edge **bin-packing algorithm** to maximize space usage and minimize paper waste, while allowing extensive customization options for layout and output quality.  

---

## **Key Features**  

### **1. Two Distinct Packing Modes**  

#### **Efficient Packing Mode**  
- Automatically resizes and arranges images using a sophisticated **bin-packing algorithm** to maximize space utilization.  
- Ideal for users looking to optimize page usage and reduce the number of printed pages.  
- Customizable options include:  
  - **Max Width %**: Set the maximum width for images as a percentage of the page size.  
  - **Packing Efficiency Algorithm**: Adjust the efficiency-speed trade-off.  
  - **Paper Size**: Select standard paper sizes (A4, Letter, etc.).  

#### **Freeform Mode**  
- Offers full manual control over image layout.  
- Allows for free movement, resizing, and rotation of images for custom layouts.  
- Perfect for creative compositions where precision and flexibility are paramount.  

---

### **2. Cross-Mode Features**  
Both modes share a range of convenient and powerful features:  

- **Image Resizing**:  
  - Manually adjust image dimensions or use preset sizes (e.g., passport, visa).  

- **Drag-and-Drop and Paste Functionality**:  
  - Quickly upload images by dragging them to the workspace or pasting directly using `Ctrl+V`.  

- **Full-Page Preview**:  
  - View individual images in full size on the selected paper format.  

- **Cropping Tools**:  
  - Choose from multiple cropping presets for precise tailoring.  

- **Image Duplication**:  
  - Replicate images for layouts requiring multiple copies.  

- **Borders and Margins**:  
  - Add customizable borders for enhanced presentation.  
  - Adjust margins to create spacing for framing or binding.  

- **Paper Size Selection**:  
  - Choose from common formats (A4, Letter, etc.).  

- **PDF Export and Print Options**:  
  - Save layouts as PDF files or print directly from the app.  

---

### **3. Exclusive Features by Mode**  

#### **Efficient Packing Mode**  
- **Packing Efficiency Control**:  
  - Adjust the balance between layout efficiency and processing speed.  

- **Algorithm Selection**:  
  - **Efficient Algorithm**: Maximizes space usage with advanced logic.  
  - **Simple Algorithm**: Quickly arranges images in a row-by-row format.  

- **Margin and Padding Customization**:  
  - Set margins and padding to avoid crowding or allow for cutting space.  

#### **Freeform Mode**  
- **Image Movement**:  
  - Freely position images across the workspace.  
- **Rotation**:  
  - Rotate images for custom orientations.  

---

## **Technology Highlights**  

- **Progressive Web App (PWA)**:  
  - Offline functionality ensures accessibility even without an internet connection.  

- **Custom Drag-and-Drop Interface**:  
  - Simplifies image uploads for a seamless user experience.  

- **Image Resizing Logic**:  
  - Dynamically adjusts images to fit user-specified or default paper dimensions.  

- **React Konva Rendering**:  
  - Provides responsive and high-quality visual layouts.  

- **Efficient-Rect-Packer Integration**:  
  - Leverages a custom npm package for optimized bin-packing algorithms.  

---


## 🛠️ Built With (Tech Stack)

**Frontend:** React.js, TypeScript, Redux, Tailwind CSS, React Konva

**Backend:** Efficient-Rect-Packer, Bin-Packing Algorithms: Includes advanced and simple packing algorithms:
Efficient Algorithm: Uses a heuristic-based approach for optimal space utilization.
Simple Algorithm: Row-by-row packing for quick and straightforward arrangements.

**Tools & Libraries:** Vite, PostCSS, HTML5 Canvas


**Database:** MongoDB for storing user data and progress.
Color Picker: Integrated iro.js for precise shade selection.





Additional Features
PWA (Progressive Web App): Offline capabilities to ensure seamless user experience even without an internet connection.
Drag-and-Drop Interface: Enables intuitive image uploads and manipulation.
PDF Generation: Allows exporting layouts directly to PDF for easy sharing or printing.



## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Demo

Visit the deployed site to seethe demo by your own selve

