import { useDispatch } from "react-redux";
import { checkTodo, removeTodo, editTodo } from "./todoReducer";
import React, { useState } from "react";

function CardItem({ titleCard, isPending, idCard }) {
  const dispatch = useDispatch()
  const [visible, setVisible] = useState(false)
  const check = () => {
    dispatch(checkTodo({
      id: idCard
    }))
  }

  const onEditTodo = () => {
    setVisible(!visible)
  }
  
  const onRemoveTodo = () => {
    console.log('here')
    dispatch(removeTodo({
      id: idCard
    }))
  }

  const onEditSubmit = (e) => {
    e.preventDefault()
    console.log(e.currentTarget)
    const formData = new FormData(e.currentTarget)
    dispatch(editTodo({
      id: idCard,
      title: formData.get('new-name')
    }))
    onEditTodo()
  }

  console.log('componentWillUpdate')
  console.log(isPending)
  
  return (
    <li className="relative shadow-custom-white py-4 px-2 flex justify-between">
      <div className="flex gap-x-2">
        <label>
          <input onClick={check} type="radio" />
        </label>
        {isPending ?
          <span className="text-custom-dark-blue line-through">{ titleCard}</span>
         :
          <span className="text-custom-dark-blue">{ titleCard}</span>
         }
      </div>
      <div className="options">
        <button onClick={onRemoveTodo}>
          <span className="inline-block vertical-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none">
              <g clipPath="url(#clip0_10_145)">
                <path
                  d="M2.21429 6.39999H22.7857"
                  stroke="black"
                  strokeWidth="1.71429"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.78574 6.39999H20.2143V21.8286C20.2143 22.2832 20.0337 22.7193 19.7122 23.0407C19.3907 23.3622 18.9547 23.5429 18.5 23.5429H6.50002C6.04536 23.5429 5.60933 23.3622 5.28784 23.0407C4.96635 22.7193 4.78574 22.2832 4.78574 21.8286V6.39999Z"
                  stroke="black"
                  strokeWidth="1.71429"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.21429 6.4V5.54286C8.21429 4.40621 8.66582 3.31613 9.46955 2.5124C10.2733 1.70867 11.3634 1.25714 12.5 1.25714C13.6367 1.25714 14.7267 1.70867 15.5305 2.5124C16.3342 3.31613 16.7857 4.40621 16.7857 5.54286V6.4"
                  stroke="black"
                  strokeWidth="1.71429"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.92859 9.82857V19.2571"
                  stroke="black"
                  strokeWidth="1.71429"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.0714 9.82857V19.2571"
                  stroke="black"
                  strokeWidth="1.71429"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_10_145">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0.5 0.399994)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
        </button>
        <button onClick={onEditTodo}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none">
              <g clipPath="url(#clip0_10_146)">
                <path
                  d="M9.07143 21.3828L1.35715 23.5428L3.51715 15.8286L17.6429 1.77142C17.8025 1.60814 17.9932 1.4784 18.2037 1.38983C18.4142 1.30126 18.6402 1.25563 18.8686 1.25563C19.0969 1.25563 19.323 1.30126 19.5335 1.38983C19.744 1.4784 19.9346 1.60814 20.0943 1.77142L23.1286 4.82285C23.2893 4.98221 23.4168 5.17181 23.5038 5.38071C23.5908 5.58962 23.6357 5.81368 23.6357 6.03999C23.6357 6.26629 23.5908 6.49036 23.5038 6.69926C23.4168 6.90816 23.2893 7.09777 23.1286 7.25713L9.07143 21.3828Z"
                  stroke="black"
                  strokeWidth="1.71429"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_10_146">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0.5 0.399994)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
        </button>
      </div>
      {
        visible && (
        <div className="absolute top-0 left-0 right-0 px-3 bottom-0 bg-white flex items-center justify-center">
          <form onSubmit={onEditSubmit} className="w-full">
            <input name="new-name" className="bg-slate-300 w-full p-2 rounded-sm" type="text" placeholder="add new title" />
          </form>
          <button onClick={onEditTodo}>Close</button>
        </div>
        )
      }
    </li>
  );
}

export default CardItem;
