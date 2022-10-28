import { Injectable } from '@angular/core';


export interface Task {
    id: number;
    timeInSeconds: number;
    difficulty: string;
    name: string;
    description: string; 
    image: string; //url to an image
}
