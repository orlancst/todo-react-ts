import { FilterValue } from "../types"
import Filters from "./Filters"

interface Props {
    activeCount: number,
    completedCount: number,
    filterSelected: FilterValue
    onClearCompleted: () => void,
    handleFilterChange: (filter: FilterValue) => void
}

const Footer: React.FC<Props> = ({ activeCount = 0, completedCount = 0, filterSelected, handleFilterChange, onClearCompleted }) => {
  return (
    <footer className="footer">
        <span className="todo-count">
            <strong>{activeCount} tareas pendientes</strong>
        </span>

        <Filters filterSelected={filterSelected} onFilterChange={() => {}} />
    </footer>
  )
}

export default Footer