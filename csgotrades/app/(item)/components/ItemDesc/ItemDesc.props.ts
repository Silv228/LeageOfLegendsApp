import { DetailedHTMLProps, HtmlHTMLAttributes } from "react"

export interface ItemDescProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    id: string
    setInfoOpen: (isOpen: boolean) => void
}