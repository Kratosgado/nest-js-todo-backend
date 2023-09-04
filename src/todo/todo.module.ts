/* eslint-disable prettier/prettier */
// todo.module.ts

import { Module } from "@nestjs/common";
import { TodoService } from "./todo.service";
import { TodoController } from "./todo.controller";

@Module({
   providers: [TodoService],
   controllers: [TodoController],
})
export class TodoModule {}