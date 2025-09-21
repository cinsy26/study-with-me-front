import React from 'react'

type ButtonProps = {
    width?: string
    height?: string
    color?: string
    fontSize?: string
    children: React.ReactNode
    onClick?: () => void
}

export default function RectangleButton({ 
    width = "fit-content", 
    height = "fit-content", 
    color = 'white',
    children, 
    onClick,
    }: ButtonProps){
    return(
        <button
            onClick={onClick}
            style={{width, height, color}}
            className="
            flex
            justify-center
            items-center
            px-[30px] //좌우 패딩 30px로 설정
            py-[7px] //상하 패딩을 10px로 설정
            rounded-[5px] //모서리를 중간 정도 둥글게
            text-white //글자색은 흰색
            text-[12px]
            border border-gray-300
            min-w-[20%]

            "
            >
                {children}
            </button>
    )
}