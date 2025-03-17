import React from 'react'

export const Thumb = (props) => {
  const { selected, onClick, name } = props

  return (
    <div
      className={'embla-thumbs__slide border border-[#79956c] border-opacity-50 transition px-10 py-2 rounded-full shadow-sm hover:shadow-md'.concat(
        selected ? ' bg-[#79956c] bg-opacity-40 border-[#f5ebe0]' : ' '
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number text-[11px] lg:text-[11px] xl:text-[13px]"
      >
        {name}
      </button>
    </div>
  )
}
