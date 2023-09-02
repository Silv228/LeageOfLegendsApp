export interface PaginationProps {
    page: number
    maxPage: number
    setPage: (page: number) => void
    type?: 'full' | 'medium' | 'short'  
}