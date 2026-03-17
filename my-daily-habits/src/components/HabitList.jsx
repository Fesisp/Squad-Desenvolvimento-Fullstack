// src/components/HabitList.jsx
// Passo 1 = Montagem
import { useEffect, useState } from 'react'
import HabitCard from './HabitCard'
function HabitList() {
    const [habits, setHabits] = useState(() => {
        const stored = localStorage.getItem('my-daily-habits')
        if (!stored) return [
            { id: 1, nome: 'Exercicio', descricao: 'Treino de força', meta: 5, ativo: true, diasFeitos: 5 },
            { id: 2, nome: 'Leitura', descricao: 'Livro ou artigo', meta: 7, ativo: true, diasFeitos: 3 },
            { id: 3, nome: 'Meditação', descricao: 'Respiração e foco', meta: 7, ativo: false, diasFeitos: 0 },
            { id: 4, nome: 'Hidratação', descricao: 'Beber 2 litros de água', meta: 7, ativo: true, diasFeitos: 6 },
        ]
        try {
            return JSON.parse(stored)
        } catch {
            return []
        }})
        const limparHistorico = () => {
            localStorage.removeItem('my-daily-habits')
            setHabits([
                { id: 1, nome: 'Exercicio', descricao: 'Treino de força', meta: 5, ativo: true, diasFeitos: 5 },
                { id: 2, nome: 'Leitura', descricao: 'Livro ou artigo', meta: 7, ativo: true, diasFeitos: 3 },
                { id: 3, nome: 'Meditação', descricao: 'Respiração e foco', meta: 7, ativo: false, diasFeitos: 0 },
                { id: 4, nome: 'Hidratação', descricao: 'Beber 2 litros de água', meta: 7, ativo: true, diasFeitos: 6 },
            ])
        }
    <button onClick={limparHistorico}>Limpar Histórico</button>
    const removerHabit = (id) => {
        setHabits(habits.filter(habit => habit.id !== id))}
    const [novoNome, setNovoNome] = useState('')
    const [novaDescricao, setNovaDescricao] = useState('')
    const [novaCategoria, setNovaCategoria] = useState('')
    useEffect(() => {
        localStorage.setItem('my-daily-habits', JSON.stringify(habits))
    }, [habits])
    useEffect(() => [])
    const adicionarHabit = (event) => {
        event.preventDefault()
        if (!novoNome.trim()) {
            alert('Informe um nome para o hábito.')
            return
        }
        const novoHabit = {
            id: Date.now(),
            nome: novoNome,
            descricao: novaDescricao,
            meta: 7, 
            ativo: true,
            diasFeitos: 0,
            categoria: novaCategoria || 'Geral',
        }
        setHabits([...habits, novoHabit])
        setNovoNome('')
        setNovaDescricao('')
        setNovaCategoria('')
    }
    return (
        <section>
            <form onSubmit={adicionarHabit} className="habit-form">
                <div>
                    <label>
                        Nome do hábito *
                        <input
                            type="text"
                            value={novoNome}
                            onChange={(e) => setNovoNome(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Descrição
                        <input
                            type="text"
                            value={novaDescricao}
                            onChange={(e) => setNovaDescricao(e.target.value)}
                            />
                    </label>
                </div>
                <div>
                    <label>
                        Categoria
                        <input
                            type="text"
                            value={novaCategoria}
                            onChange={(e) => setNovaCategoria(e.target.value)}
                            />
                    </label>
                </div>
                <button type="submit">Adicionar Hábito</button>
            </form>
            <ul>
                {habits.length === 0 
                ?<p>Nenhum hábito cadastrado ainda.</p>
                :<p>Você tem {habits.length} hábitos(s) cadastrados(s).</p>}
                {habits.map((habit) => (
                    <HabitCard
                        key={habit.id}
                        nome={habit.nome}
                        descricao={habit.descricao}
                        meta={habit.meta}
                        ativo={habit.ativo}
                        diasFeitos={habit.diasFeitos}
                        onRemover={() => removerHabit(habit.id)}
                    />
                ))} 
            </ul>
        </section>
    )
}

export default HabitList