async function orderPage(event){
    event.preventDefault()
    var priceOfDish = event.target.dishPrice.value
    var nameOfItem = event.target.nameOfDish.value
    var tableOfItem = event.target.tableNo.value


    let myObj = {
        dishPrice: priceOfDish,
        nameOfDish: nameOfItem,
        tableNo: tableOfItem
    }

    await axios.post("https://crudcrud.com/api/23d31d26b18d468a9a032a8ddffd7fd8/orderPage", myObj)
    const ulTable1Element = document.getElementById("Table1Ul")
    const ulTable2Element = document.getElementById("Table2Ul")
    const ulTable3Element = document.getElementById("Table3Ul")

    
    if(tableOfItem == "table1")
    {
        // creating li element for Table 1 ul element

        
        const newLiElement = document.createElement("li");
        newLiElement.className = "table1"
        const newLiElementText = document.createTextNode(`${priceOfDish} - ${nameOfItem} - ${tableOfItem}`)
        newLiElement.appendChild(newLiElementText)
        ulTable1Element.appendChild(newLiElement)

        // creating delete button element for Table 1 li element as its children
        const deleteButton1 = document.createElement("button")
        deleteButton1.className = "delete1"
        const deleteButton1Text = document.createTextNode("delete")
        deleteButton1.appendChild(deleteButton1Text)
        newLiElement.appendChild(deleteButton1)

    }
    else if(tableOfItem == "table2"){
        const newLiElement2= document.createElement("li");
        newLiElement2.className = "table2"
        const newLiElementText2 = document.createTextNode(`${priceOfDish} - ${nameOfItem} - ${tableOfItem}`)
        newLiElement2.appendChild(newLiElementText2)
        ulTable2Element.appendChild(newLiElement2)


        // creating delete button element for Table 2 li element as its children
        const deleteButton2 = document.createElement("button")
        deleteButton2.className = "delete2"
        const deleteButton2Text = document.createTextNode("delete")
        deleteButton2.appendChild(deleteButton2Text)
        newLiElement2.appendChild(deleteButton2)
    }
    else{
        
        const newLiElement3= document.createElement("li");
        newLiElement3.className = "table3"
        const newLiElementText3 = document.createTextNode(`${priceOfDish} - ${nameOfItem} - ${tableOfItem}`)
        newLiElement3.appendChild(newLiElementText3)
        ulTable3Element.appendChild(newLiElement3)


        // creating delete button element for Table 3 li element as its children
        const deleteButton3 = document.createElement("button")
        deleteButton3.className = "delete3"
        const deleteButton3Text = document.createTextNode("delete")
        deleteButton3.appendChild(deleteButton3Text)
        newLiElement3.appendChild(deleteButton3)
    }

    ulTable1Element.addEventListener("click", function(event){
        console.log("1")

        console.log(event)
        if(event.target.classList.contains("delete1"))
        {
            // deleting the node which contains delete1 class on clicking the delete button
            const li1ToDelete = event.target.parentElement
            ulTable1Element.removeChild(li1ToDelete)

           // getting the text content of the firstchild of li element and converting in an array
            const li1ToDeleteText = li1ToDelete.firstChild.textContent
            var arr= li1ToDeleteText.split(" - ")
            // console.log(arr)

        }
        axios.get("https://crudcrud.com/api/23d31d26b18d468a9a032a8ddffd7fd8/orderPage")
        .then(function (response) {
            console.log(response.data)
            let idx=-1
            for(let i=0; i<response.data.length; i++)
            {
                if(response.data[i].dishPrice===arr[0] &&  response.data[i].nameOfDish===arr[1] && response.data[i].tableNo ===arr[2]){
                    idx = i
                    break
                }
            }
            const idOfDeletionNode1 = response.data[idx]._id
            // deleting the object from the crud crud for table 1
            console.log(idOfDeletionNode1)
            let newURL = "" 
            newURL = "https://crudcrud.com/api/23d31d26b18d468a9a032a8ddffd7fd8/orderPage/" + idOfDeletionNode1
            console.log(newURL)
            axios.delete(newURL)

            
        })
        .catch(function (error) {
             console.log(error);
         })

         
    })

    ulTable2Element.addEventListener("click", function(event){
        console.log(event)

        if(event.target.classList.contains("delete2"))
        {
            // deleting the node which contains delete2 class on clicking the delete button
            const li2ToDelete = event.target.parentElement
            ulTable2Element.removeChild(li2ToDelete)


            // getting the text content of the firstchild of li element and  converting in an array
            const li2ToDeleteText = li2ToDelete.firstChild.textContent
            var arr2 = li2ToDeleteText.split(" - ")
            // console.log(arr2)

        axios.get("https://crudcrud.com/api/23d31d26b18d468a9a032a8ddffd7fd8/orderPage")
        .then(function (response) {
            // console.log(response.data)
            let idx2=-1
            for(let i=0; i<response.data.length; i++)
            {
                if(response.data[i].dishPrice===arr2[0] &&  response.data[i].nameOfDish===arr2[1] && response.data[i].tableNo ===arr2[2]){
                    idx2 = i
                    break
                }
            }
            const idOfDeletionNode2 = response.data[idx2]._id
            console.log(idOfDeletionNode2)

            let newURL2 = "" 
            newURL2 = "https://crudcrud.com/api/23d31d26b18d468a9a032a8ddffd7fd8/orderPage/" + idOfDeletionNode2
            console.log(newURL2)
            axios.delete(newURL2)
        })
        .catch(function (error) {
             console.log(error);
         })

            
        }
    })

    ulTable3Element.addEventListener("click", function(event){
        console.log(event)

        if(event.target.classList.contains("delete3"))
        {
            // deleting the node which contains delete3 class on clicking the delete button
            const li3ToDelete = event.target.parentElement
            ulTable3Element.removeChild(li3ToDelete)

            // getting the text content of the firstchild of li element and converting in an array
            const li3ToDeleteText = li3ToDelete.firstChild.textContent
            var arr3 = li3ToDeleteText.split(" - ")
            // console.log(arr3)


        axios.get("https://crudcrud.com/api/23d31d26b18d468a9a032a8ddffd7fd8/orderPage")
        .then(function (response) {
            // console.log(response.data)
            let idx3=-1
            for(let i=0; i<response.data.length; i++)
            {
                if(response.data[i].dishPrice===arr3[0] &&  response.data[i].nameOfDish===arr3[1] && response.data[i].tableNo ===arr3[2]){
                    idx3 = i
                    break
                }
            }
            const idOfDeletionNode3 = response.data[idx3]._id
            console.log(idOfDeletionNode3)

            let newURL3 = "" 
            newURL3 = "https://crudcrud.com/api/23d31d26b18d468a9a032a8ddffd7fd8/orderPage/" + idOfDeletionNode3
            console.log(newURL3)
            axios.delete(newURL3)
            
        })
        .catch(function (error) {
             console.log(error);
         })
            
            
        }
    })










    // window.addEventListener("DOMContentLoaded", function(){
    //     axios.get("https://crudcrud.com/api/22f667e7f7f240178e2736da65b83103/orderPage")
    //     .then(function(response){
    //         for(let i=0; i<response.data.length; i++)
    //         {
    //             if(response.data[i].tableNo == table1)
    //             {
                    
    //             }
    //             else if(response.data[i].tableNo == table2)
    //             {

    //             }
    //             else{

    //             }
    //         }
    //     })
    //     .catch(function(err){
    //         console.log(err)
    //     })
    // })


    

}



window.addEventListener('DOMContentLoaded', function (event) {
    event.preventDefault();
    axios
      .get('https://crudcrud.com/api/23d31d26b18d468a9a032a8ddffd7fd8/orderPage')
      .then(function (response) {
        console.log(response.data);
        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].tableNo == 'table1') {
            table1func(response.data[i]);
          } else if (response.data[i].tableNo == 'table2') {
            table2func(response.data[i]);
          } else {
            table3func(response.data[i]);
          }
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  });
  function table1func(userData) {
    const ulTable1Element1 = document.getElementById('Table1Ul');
    const li1 = document.createElement('li');
    li1.className = 'table1';
    const li1Text = document.createTextNode(
      `${userData.dishPrice} - ${userData.nameOfDish} - ${userData.tableNo}`
    );
    li1.appendChild(li1Text);
    ulTable1Element1.appendChild(li1);
  
    // creating delete button element for Table 1 li element as its children
    const delBtn1 = document.createElement('button');
    delBtn1.className = 'delete1';
    const delBtn1Text = document.createTextNode('delete');
    delBtn1.appendChild(delBtn1Text);
    li1.appendChild(delBtn1);
  }
  
  function table2func(userData) {
    const ul2Element2 = document.getElementById('Table2Ul');
    const li2 = document.createElement('li');
    li2.className = 'table2';
    const li2Text = document.createTextNode(
      `${userData.dishPrice} - ${userData.nameOfDish} - ${userData.tableNo}`
    );
    li2.appendChild(li2Text);
    ul2Element2.appendChild(li2);
  
    // creating delete button element for Table 2 li element as its children
    const detBtn2 = document.createElement('button');
    detBtn2.className = 'delete2';
    const detBtn2Text = document.createTextNode('delete');
    detBtn2.appendChild(detBtn2Text);
    li2.appendChild(detBtn2);
  }
  
  function table3func(userData) {
    const ul3Element3 = document.getElementById('Table3Ul');
    const li3 = document.createElement('li');
    li3.className = 'table3';
    const li3Text = document.createTextNode(
      `${userData.dishPrice} - ${userData.nameOfDish} - ${userData.tableNo}`
    );
    li3.appendChild(li3Text);
    ul3Element3.appendChild(li3);
  
    // creating delete button element for Table 3 li element as its children
    const delBtn3 = document.createElement('button');
    delBtn3.className = 'delete3';
    const delBtn3Text = document.createTextNode('delete');
    delBtn3.appendChild(delBtn3Text);
    li3.appendChild(delBtn3);
  }
  
  

