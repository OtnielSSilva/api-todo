import { Router } from "express";
import { Todo } from "../models/todo";

const router = Router();

let todos: Todo[] = [
	{ id: 1, title: "Learn TypeScript", completed: false },
	{ id: 2, title: "Build an API with Express", completed: false },
];

// Rota - Get - todas as tarefas
router.get("/todos", (req, res) => {
	res.json(todos);
});

// Rota - Post - criar uma nova tarefa
router.post("/todos", (req, res) => {
	const newTodo: Todo = {
		id: todos.length + 1,
		title: req.body.title,
		completed: false,
	};
	todos.push(newTodo);
	res.status(201).json(newTodo);
});

// Rota - Put - atualizar uma tarefa existente
router.put("/todos/:id", (req, res) => {
	const id = parseInt(req.params.id);
	const todosIndex = todos.findIndex((todo) => todo.id === id);

	if (todosIndex !== -1) {
		todos[todosIndex] = { ...todos[todosIndex], ...req.body };
		res.json(todos[todosIndex]);
	} else {
		res.status(404).json({ message: "Todo not found" });
	}
});

// Rota - Delete - deletar uma tarefa existente
router.delete("/todos/:id", (req, res) => {
	const id = parseInt(req.params.id);
	todos = todos.filter((todo) => todo.id !== id);
	res.status(204).end();
});

export default router;
