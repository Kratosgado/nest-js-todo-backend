/* eslint-disable prettier/prettier */
// todo.service.ts

import { Injectable } from "@nestjs/common";
import { Todo } from "./todo.interface";

@Injectable()
export class TodoService{
   private storage: Todo[] = [];

   create(todo: Todo): void {
      
      if (this.storage.length !== 0) {
         const currentMaxId = Math.max(...this.storage.map((t: Todo) => t.id));
         todo.id = currentMaxId + 1;
      } else {
         todo.id = 0;
      }
      
      this.storage.push(todo);
   }

   update(id: number, todo: Todo): void {
      const index = this.storage.findIndex((t: Todo) => t.id === id);
      this.storage[index] = todo;
   }

   remove(id: number): void {
      const index = this.storage.findIndex((t) => t.id === id);
      this.storage.splice(index, 1);
   }

   findOne(id: number): Todo {
      return this.storage.find((t: Todo) => t.id === id);
   }

   findAll(): Todo[] {
      return this.storage;
   }
   
}