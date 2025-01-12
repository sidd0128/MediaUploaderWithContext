# **File Management and Upload System**

## **Overview**

This React Native project provides a modular and scalable system for handling media file uploads, with robust support for image and video selection, resizing, and uploading. Users can select files from their gallery, capture photos or videos using the camera, and manage placeholders for their uploads. The app validates file size limits, generates thumbnails for video previews, and supports efficient uploading.

---

## **Project Structure**

The project is well-organized and follows best practices for modularity and scalability. Here's an overview of the structure:

```
src/
├── components/
│   ├── InfoBox/              # Custom feedback UI
│   ├── Button/               # Reusable button components
│   └── IOSSettingsModal/     # iOS-specific permissions modal
├── contexts/
│   └── AddFilesPlaceholderContext/  # Context for managing placeholders and file uploads
├── hooks/
│   ├── imagePicker/          # Custom hook for image/video selection
│   ├── imageHandler/         # Upload and thumbnail generation hooks
│   └── imageResize.ts        # Hook for resizing images
├── screens/
│   └── OpenCameraGalleryScreen/  # Main screen for managing uploads
└── types/
    └── MediaFile.ts          # Type definitions for media files
```

---

## **Key Features**

1. **File Management**:
   - Add, replace, or remove files with placeholder-based file management.
   - Support for both images and videos.

2. **File Validation**:
   - Validates file size (maximum 8 MB).
   - Displays warnings for invalid or missing files.

3. **Thumbnail Generation**:
   - Automatically generates thumbnails for videos.

4. **Efficient File Upload**:
   - Supports multiple file uploads with error handling.
   - Provides progress indicators for uploads.

5. **Reusable Components**:
   - `InfoBox`: Displays feedback messages (warnings, errors, etc.).
   - `IOSSettingsModal`: Guides users to iOS settings for permissions.
   - `Custom Buttons`: Modular buttons for consistent styling.

---

## **Code Explanation**

### **Custom Hooks**

#### **1. useAddFiles**
Manages the lifecycle of files (images/videos):
- **File Selection**: Handles adding, replacing, or removing files.
- **Validation**: Checks file size limits.
- **Uploading**: Provides bulk upload support with error handling.

**Example Usage:**
```javascript
const {
  handleSelectFileFromLibraryPress,
  handleTakePhotoPress,
  handleRecordVideoPress,
  uploadAllFiles,
} = useAddFiles();
```

#### **2. useImagePicker**
Manages image and video selection, including permissions:
- Supports gallery selection, camera, and video recording.
- Handles permissions for both iOS and Android.

**Example Usage:**
```javascript
const { showCamera, showPhotoAndVideoGalleryPicker } = useImagePicker();
showCamera(); // Launches camera
```

#### **3. useImageResize**
Resizes images to optimize file size before uploading.

**Example Usage:**
```javascript
const { resizeImage } = useImageResize();
resizeImage({ uri: 'file://path', originalRotation: 90 });
```

---

### **Reusable Components**

#### **InfoBox**
Displays feedback to users, such as warnings or errors.

**Example Usage:**
```javascript
<InfoBox
  variant="WARNING"
  title="File Too Large"
  message="Please select a file smaller than 8 MB."
  button={{ label: 'OK', onPress: () => setShowWarning(false) }}
/>
```

#### **IOSSettingsModal**
Guides users to iOS settings for granting permissions.

**Example Usage:**
```javascript
<IOSSettingsModal isVisible={modalVisible} setIsVisible={setModalVisible} />
```

---

### **Core Screen: OpenCameraGalleryScreen**

This is the main interface for users to add and manage files. It integrates the hooks and components into a cohesive workflow.

**Features**:
- Displays placeholders for files.
- Allows file selection, replacement, or removal.
- Handles uploading all selected files.

---

## **Benefits of Context API and Custom Hooks**

### **Why Context API?**
- **Shared State Management**: Easily shares state (e.g., placeholders, files) across components.
- **Scalability**: Simplifies management as the app grows.
- **Performance**: Prevents prop-drilling and ensures better component reusability.

### **Why Custom Hooks?**
- **Reusability**: Encapsulates logic like file uploads or image resizing.
- **Separation of Concerns**: Keeps components clean by isolating functionality.
- **Testability**: Hooks are easier to test independently.

---

## **Code Efficiency and Scalability**

- **Modular Design**: Each hook and component is independent, making the codebase easier to maintain.
- **Reusable Components**: Standardized design and behavior reduce development time.
- **Asynchronous Handling**: Efficiently manages async operations like file validation and uploads.

---

## **Diagram**

```plaintext
+-----------------------------------------+
| OpenCameraGalleryScreen                |
|                                         |
|   +----------------------------+        |
|   | AddFilePlaceholders        |        |
|   +----------------------------+        |
|                                         |
|   +----------------------------+        |
|   | InfoBox                    |        |
|   +----------------------------+        |
|                                         |
|   +----------------------------+        |
|   | IOSSettingsModal           |        |
|   +----------------------------+        |
|                                         |
|   +----------------------------+        |
|   | Button: "Upload Files"     |        |
|   +----------------------------+        |
+-----------------------------------------+
```

---

## **Getting Started**

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the app:
   - iOS: `npx react-native run-ios`
   - Android: `npx react-native run-android`

---

## **Conclusion**

This project demonstrates a modular and scalable approach to building file upload workflows in React Native. By leveraging custom hooks, reusable components, and the Context API, it achieves a balance between performance and maintainability.
