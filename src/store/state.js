import { createStore, createEvent, createEffect } from 'effector'

// стор
const palettsStore = createStore([])

// событие
const setPaletts = createEvent('setPaletts')

//
const getPaletts = createEffect('load paletts').use(params => {
  return fetch('data.json').then(res =>
    res.json(),
  )
})

// выводим в консоль все изменения стора
getPaletts.watch(params => {
  console.log(params) // {id: 1}
})

// что-то делаем когда вызвали setPaletts событие
palettsStore.on(setPaletts,()=>{

})
