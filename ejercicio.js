/* 
Componentes TODO List
App
	Header
	Main ->state [].Funciones: add,resetTasks,removeAll,removeOne
		(aquí formulario + botón)
		List -->props:[], removeOne. Funciones:paintCard
			Card*N ------> props:tarea,removeOne
		(aquí botón reset y removeAll)
	Footer
*/
Main = {
	// state: [],
	// addTask: addTask(),
	// resetTasks: resetTasks(),
	// removeAllTasks: removeAllTasks(),
	removeTask: removeTask() 
}
//! Crea una TODO list que contenga lo siguiente:
//* - Un formulario con input + botón
//* - Un componente List que recorra listas de items
//* - Un componente Card que contenga cada TO DO
//* - Botón CLEAR (removeAllTasks) para borrar todas las tareas
//* - Botón BORRAR (removeTask), asociado a cada tarea, para poder borrar de manera independiente
//* - Botón para hacer RESET (resetTasks)de las tareas
// - Dar estilo CSS a los componentes con lo visto en clase para practicar

//! Flujo de la aplicación:

//* - Nada más empezar tendremos un input y un botón. El botón tendrá el texto ADD
//* - Si hemos escrito algo en el input y hacemos click sobre el botón ADD, se añadirá un item debajo del input.
//* - Cuando un item sea añadido, se borrará inmediatamente lo que habíamos escrito en el input.
//* - Se debe hacer una precarga de tareas de un JSON de datos
//* - El botón de RESET mostrará de nuevo sólo las tareas obtenidas de la precarga de datos