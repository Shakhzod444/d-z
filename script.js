let arr = [
    {
        name: 'iskandar',
        age: 9,
        course: {
            title: 'dev'
        }
    },
    {
        name: 'zafar',
        age: 14,
        course: {
            title: 'smm'
        }
    },
    {
        name: 'temur',
        age: 1,
        course: {
            title: 'graph'
        }
    },
    {
        name: 'sardor',
        age: 24,
        course: {
            title: 'smm'
        }
    },
    {
        name: 'timur',
        age: 19,
        course: {
            title: 'dev'
        }
    },
    {
        name: 'aziz',
        age: 28,
        course: {
            title: 'graph'
        }
    },
    {
        name: 'ali',
        age: 26,
        course: {
            title: 'dev'
        }
    },
    {
        name: 'mir',
        age: 17,
        course: {
            title: 'graph'
        }
    },
    {
        name: 'jonibek',
        age: 25,
        course: {
            title: 'dev'
        }
    },
    {
        name: 'shox',
        age: 22,
        course: {
            title: 'smm'
        }
    },
    {
        name: 'shakh_',
        age: 68,
        course: {
            title: 'dev'
        }
    },
    {
        name: 'mustafa',
        age: 78,
        course: {
            title: 'dev'
        }
    }
]

let courses = {
    smm: {
        count: 0,
        arr_names: []
    },
    dev: {
        count: 0,
        arr_names: []
    },
    graph: {
        count: 0,
        arr_names: []
    },
}
alert("Добро пожаловать ")

let std = confirm('Хотите увидеть студентов которые учиться по этим 3 направлениям  : SMM , DEV и GRAPH  ')

if (std === true) {
    arr.filter(item => {
        switch (item.course.title) {
            case 'smm':
                courses.smm.count++
                courses.smm.arr_names.push(item)
                break;
            case 'dev':
                courses.dev.count++
                courses.dev.arr_names.push(item)
                break;
            case 'graph':
                courses.graph.count++
                courses.graph.arr_names.push(item)
                break;
        }
    })
    console.log(courses);


    let aver = confirm('Хотите средний возраст студентов узнать ? ')
    if (aver === true) {
        average_age = 0
        arr.forEach((itemA) => {
            average_age += itemA.age / 12

            average_age = Math.round(average_age)
        })

        console.log('средний возраст студентов ' + average_age);

    } else {
        alert('Всего хорошего !')
    }

} else {
    alert('Посещайте другой раз , когда у вас будет < ХОРОШЕЕ НАСТРОЕНИЕ ! >    Всего хорошего')
}

