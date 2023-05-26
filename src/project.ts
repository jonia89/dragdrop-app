import { ProjectState } from "./classes/state.js";
import { ProjectList } from "./classes/list.js";
import { ProjectInput } from "./classes/input.js";

export enum ProjectStatus {
  Active,
  Finished,
}

export class Project {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public people: number,
    public status: ProjectStatus
  ) {}
}

export type Listener<T> = (items: T[]) => void;

export const projectState = ProjectState.getInstance();

new ProjectInput();
new ProjectList("active");
new ProjectList("finished");
