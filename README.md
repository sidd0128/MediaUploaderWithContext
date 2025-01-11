OpenCameraGalleryScreen Structure and Component Details

The `OpenCameraGalleryScreen` component facilitates adding images and videos, managing their state, and initiating uploads.  It uses a combination of functional components, custom hooks, context, and bottom sheets to achieve a modular and maintainable structure.

1.  OpenCameraGalleryScreen:
    -   Top-level component.
    -   Wraps everything in the `AddFilesPlaceholderContextProvider`, making the file management state accessible to all child components.
    -   Renders the `OpenCameraGalleryScreenContent`.

2.  OpenCameraGalleryScreenContent:
    -   Core logic and UI.
    -   Uses the `useAddFiles` custom hook to manage file state, handle uploads, and interact with the bottom sheets.
    -   Renders the `AddFilePlaceholders`, buttons, modals, and `InfoBox` components.
    -   Manages the visibility of the `IOSSettingsModal` based on the `useImagePicker` hook.
    -   Handles the upload process and displays informational messages using the `InfoBox`.

3.  useAddFiles Custom Hook:
    -   Manages the state of added files (likely an array of objects representing files).
    -   Provides functions for adding, removing, and interacting with files.
    -   Handles the `uploadAllFiles` logic, which likely interacts with a backend API.
    -   Manages references to the bottom sheets (`refRBSheet1` and `refRBSheet2`).
    -   Exposes state and functions to the `OpenCameraGalleryScreenContent` component.

4.  AddFilePlaceholders:
    -   Displays placeholder UI for adding files.  This might involve showing previews of selected images and videos.
    -   Interacts with the `useAddFiles` hook (via context) to update the file list when a user adds a new file.
    -   Likely triggers the `AddFileBottomSheet` when a placeholder is tapped.

5.  AddFileBottomSheet (refRBSheet1):
    -   Bottom sheet triggered by the `AddFilePlaceholders`.
    -   Provides options for adding files from different sources (e.g., camera, photo library, device storage).
    -   Interacts with the `useAddFiles` hook (and potentially the `useImagePicker` hook) to update the file list when a file is selected.

6.  FileOptionsBottomSheet (refRBSheet2):
    -   Bottom sheet that likely appears when a user interacts with an existing file placeholder.
    -   Offers actions related to the selected file (e.g., deleting, editing metadata).
    -   Interacts with the `useAddFiles` hook to perform these actions.

7.  useImagePicker Custom Hook:
    -   Handles interactions with the device's image picker.
    -   Manages permissions and displays the `IOSSettingsModal` if necessary.
    -   Likely used by the `AddFileBottomSheet` when selecting images or videos from the device.

8.  Button (custom component):
    -   Provides a reusable button component with consistent styling and behavior.
    -   Used for the "Upload file" button.

9.  IOSSettingsModal:
    -   Modal specific to iOS, handling permission requests for camera and photo library access.
    -   Managed by the `useImagePicker` hook and displayed when required.

10. InfoBox:
    -   Displays informational messages, warnings, or errors to the user.
    -   Used to inform the user about file size limits, errors during upload, or when no files are selected.


Data Flow:

1.  User interacts with `AddFilePlaceholders`.
2.  `AddFileBottomSheet` appears, allowing user to select files.
3.  `useImagePicker` (if used) manages device permissions and image selection.
4.  `useAddFiles` hook updates the file list.
5.  `AddFilePlaceholders` updates to display the new files.
6.  User taps "Upload file" button.
7.  `uploadAllFiles` function in `useAddFiles` initiates the upload process.
8.  `InfoBox` displays messages regarding upload success, errors, or file size issues.

## Dependencies

The project relies on the following key dependencies:

* **react-native-image-resizer:**  Used for resizing images before upload, optimizing for network transfer and storage.
* **rn-fetch-blob:** Facilitates handling binary data, likely used for uploading files to a backend service.
* **react-native-image-picker:** Provides a user interface for selecting images and videos from the device's gallery or camera.
* **react-native-permissions:**  Manages runtime permissions for accessing the camera, photo library, and other device resources.
* **react-native-modal:** A performant modal component for iOS and Android.  Used for displaying the `IOSSettingsModal`.
* **react-native-raw-bottom-sheet:** A highly customizable bottom sheet component used for the `AddFileBottomSheet` and `FileOptionsBottomSheet`.
* **react-native-vector-icons:** Provides a wide selection of customizable icons for use in the UI.
* **lodash:** A utility library offering helpful functions for working with arrays, objects, and other data structures.
* **@react-navigation/native:**  The core library for React Navigation, enabling navigation between screens.
* **@react-navigation/stack:** Provides the Stack Navigator for managing a stack of screens within the app.
* **react-native-create-thumbnail:**  Likely used to create thumbnail previews of images and videos for the `AddFilePlaceholders`.
* **react-native-safe-area-context:**  Provides access to the device's safe area insets, ensuring UI elements are not obscured by notches or other device features.
* **react-native-screens:**  Provides native screen primitives for improved performance and integration with React Navigation.

