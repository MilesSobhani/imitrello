type Todo = {
  title: string,
  type : string,
  notes: string,

}

type Column = {
  name: string;
  todoList : Todo[]
}

type ColumnProps = {
  columnIndex:number,
  list: Column,
  handleDragOver: (event: React.DragEvent<HTMLDivElement>) => void,
  handleDragStart: (
    event: React.DragEvent<HTMLDivElement>, taskId:number, name:string) => any,
  handleDrop: (event: React.DragEvent<HTMLDivElement>, column: string) => any,
}

type TaskProps = {
  taskIndex:number,
  task: Todo,
  handleDragStart: (
    event: React.DragEvent<HTMLDivElement>, taskId:number, name:string) => any,
}