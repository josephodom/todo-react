import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
    return (
        <main>
            <header>
                <div class="container">
                    <h1>React Todo List</h1>
                </div>
            </header>
            
            <hr />
            
            <article>
                <div class="container">
                    <h2>To Do</h2>
                    
                    <TodoList />
                    
                    <hr />
                    
                    <TodoForm />
                </div>
            </article>
        </main>
    );
}

export default App;
