// Drag & drop interfaces

export interface Draggable {
  dragStartHandler(event: DragEvent): void;
  dragEndHandler(event: DragEvent): void;
}

export interface DragTarget {
  dropHandler(event: DragEvent): void;
  dragOverHandler(evet: DragEvent): void;
  dragLeaveHandler(event: DragEvent): void;
}
