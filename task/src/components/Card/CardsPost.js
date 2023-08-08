import React from 'react'

function CardsPost({title, body}) {
    return (
        <div>
            <div class="card">
                <div class="card-header">
                    <b>{title}</b>
                </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                        <p>{body}</p>
                    </blockquote>
                </div>
            </div>
        </div>
    )
}

export default CardsPost
