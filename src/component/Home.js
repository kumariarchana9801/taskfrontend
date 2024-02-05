function Home() {
	function formSubmit(event){
		event.preventDefault()
		console.log(event)
		var username=document.getElementById('name').value
		console.log(username)

		var userbatch=document.getElementById('batch').value
		console.log(userbatch)
        
		var mentorname=document.getElementById('name').value
		console.log(mentorname)

		var useremail=document.getElementById('email').value
		console.log(useremail)
       
	}
  return (
	<>
	<h1 className="Heading" >Zen Mentors</h1>
	<form className="Form">
    <form className="form1">
	<h2 className="student">Student Form</h2>
      <div className="space-y-10">
        
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-5">
            <div className="sm:col-span-2">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Batch
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            

            <div className="sm:col-span-2">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Mentor
              </label>
              <div className="mt-2">
                <select
                  id="course"
                  name="course"
                  autoComplete="course-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>A k sir</option>
                  <option>Poonam Verma</option>
                  <option>......</option>
                </select>
              </div>
            </div>
        </div>
        </div>
      <div className="mt-4 mr-20 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
	
		
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
	  
    </form>
	<form className="form1">
		<h2 className="student">Mentor Form</h2>
		<div className="space-y-10">
		  
			<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-5">
			  <div className="sm:col-span-2">
				<label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
				  Mentor name
				</label>
				<div className="mt-2">
				  <input
					type="text"
					name="first-name"
					id="first-name"
					autoComplete="given-name"
					className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				  />
				</div>
			  </div>
			  <div className="sm:col-span-1">
				<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
				  Email address
				</label>
				<div className="mt-2">
				  <input
					id="email"
					name="email"
					type="email"
					autoComplete="email"
					className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				  />
				</div>
			  </div>
  
			  <div className="sm:col-span-2">
				<label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
				  Course
				</label>
				<div className="mt-2">
				  <select
					id="course"
					name="course"
					autoComplete="course-name"
					className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
				  >
					<option>Full Stack dev</option>
					<option>Web dev</option>
					<option>Software engg</option>
				  </select>
				</div>
			  </div>
		  </div>
		  </div>
		<div className="mt-4 mr-20 flex items-center justify-end gap-x-6">
		  <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
			Cancel
		  </button>
	  
		  
		  <button
			type="submit"
			className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
		  >
			Save
		  </button>
		</div>
		
	  </form>
	  <form className="form1">
		<h2 className="student"> Change Mentor </h2>
		<div className="space-y-10">
		  
			<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-5">
			  <div className="sm:col-span-2">
				<label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
				  Student
				</label>
				<div className="mt-2">
				  <select
					id="course"
					name="course"
					autoComplete="course-name"
					className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
				  >
					<option>ABC</option>
					<option>DEF</option>
					<option>SPG</option>
				  </select>
				</div>
			  </div>
		  </div>
		  </div>
		  <div className="space-y-10">
		  
			<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-5">
			  <div className="sm:col-span-2">
				<label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
				  Mentor
				</label>
				<div className="mt-2">
				  <select
					id="course"
					name="course"
					autoComplete="course-name"
					className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
				  >
					<option>A k sir</option>
					<option>Poonam Verma</option>
					<option>XYZ</option>
				  </select>
				</div>
			  </div>
		  </div>
		  </div>
		<div className="mt-4 mr-20 flex items-center justify-end gap-x-6">
		  <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
			Cancel
		  </button>
	  
		  
		  <button
			type="submit"
			className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
		  >
			Save
		  </button>
		</div>
		
	  </form>
	  </form>
	</>
  )
}
export default Home
