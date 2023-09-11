'use client'

import React, { useEffect, useState } from 'react';
import { TodoObject } from '@/interfaces/todoInterface';

const Home = () => {
    const [allTodos, setAllTodos] = useState<TodoObject[]>([]);
    const [todo, setTodo] = useState<string>('');

    const saveTodo = (event: any) => {
        event.preventDefault();
        if (!todo) {
            return true;
        }
        const newTodo = {
            id: Date.now(),
            value: todo,
            isCompleted: false
        }
        setAllTodos([newTodo, ...allTodos]);
        setTodo('');
    }

    useEffect(() => {
    }, [])


    return (
        <>
            <div className="bg-gray-900">
                <div className="flex flex-grow items-center justify-center bg-gray-900 h-full">
                    <div className="max-w-full p-8 w-96 text-gray-200">
                        <div className="flex items-center mb-6">
                            <svg className="h-8 w-8 text-indigo-500 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                            </svg>
                            <h4 className="font-semibold ml-3 text-lg">Todos</h4>
                        </div>

                        <form onSubmit={saveTodo}>
                            <div className="flex items-center w-full h-8 px-2 mt-2">
                                <button className="text-sm font-medium rounded" type="submit">
                                    <svg className="w-5 h-5 text-gray-400 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </button>
                                <input className="flex-grow h-8 ml-4 bg-transparent focus:outline-none font-medium" type="text" placeholder="add a new task"
                                    value={todo}
                                    onChange={(event) => setTodo(event.target.value)}
                                />
                            </div>
                        </form>

                        {
                            allTodos.map(todoData => (
                                <div key={todoData.id}>
                                    <input className="hidden" type="checkbox" id="task_6" />
                                    <label className="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-900" htmlFor="task_6">
                                        <span className="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-500 rounded-full">
                                            <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        <div className="ml-4 text-sm">{todoData.value}</div>
                                    </label>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;