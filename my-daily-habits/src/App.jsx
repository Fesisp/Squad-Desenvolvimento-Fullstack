// src/App.jsx
import './App.css'
import Footer from "./components/Footer"
import Header from "./components/Header"
import BemVindo from "./components/BemVindo"
import SecaoHabitos from "./components/SecaoHabitos"
import HabitList from "./components/HabitList"

function App() {
  const habits = [
    { id: 1, titulo: 'Exercicio', meta: 5, ativo: true, diasFeitos: 5 },
    { id: 2, titulo: 'Leitura', meta: 5, ativo: true, diasFeitos: 5 },
    { id: 3, titulo: 'Meditação', meta: 5, ativo: true, diasFeitos: 5 },
    { id: 4, titulo: 'Hidratação', meta: 5, ativo: true, diasFeitos: 5 },
  ]
  return (
      <div>
        <Header />
        <BemVindo nomeUsuario="turma iteam" totalHabitos={habits.length} />
        <SecaoHabitos titulo="Meus Hábitos" />
         <HabitList habits={habits} />
        <SecaoHabitos habits={habits} />
        <Footer />
      </div>
      
  )
}

export default App
