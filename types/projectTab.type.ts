export interface MyProject {
    name: string | undefined;
    member: number| undefined;
    progress: number |undefined;
}

export interface Task {
    name: string |undefined;
    deadline: string |undefined;
    personCharge: string |undefined;
    isDone: number | undefined;
}

export interface DetailProject{
    name: string |undefined;
    member: string|undefined;  
    // cho nay la list member nhma k bich vit
    tasks: Task[];
    
}