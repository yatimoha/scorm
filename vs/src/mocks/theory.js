export const theoryData = [
  {
    id: 1,
    header: 'Процессы и потоки',
    body: [
      'В современных операционных системах вычисление в ядрах процессора организованы в виде процессов и потоков.',
      'Когда вы запускаете программу создается процесс. Это означает, что код загружается в область памяти, выделенную исключительно для этого процесса. Программа не имеет доступа к другим областям памяти без запроса дополнительной памяти. Если не создавать дополнительные потоки или процессы, то в каждый момент времени будет выполняться только одна машинная команда. Порядок выполнения команд определяется кодом программы, где команда представляет собой единицу кода, аналогичную строке кода ассемблера. ',
      'Также программа может порождать потоки вместо полноценных процессов. Поток, во многом аналогичный процессу, разделяет память с процессом, который его породил. Процесс может создавать множество потоков, каждый из которых обладает своим собственным указателем команд. Все упомянутое о выполнении процессов также относится к потокам. Однако, поскольку потоки разделяют память, им проще совместно использовать код и другие объекты. Поэтому для реализации конкурентности потоки оказываются более удобными по сравнению с процессами.',
    ],
  },
  {
    id: 2,
    header: 'Конкурентность и параллелизм',
    body: [
      'Конкурентность подразумевает перекрытие задач во времени, где задачи разделяют интервалы выполнения. Параллелизм, в свою очередь, предполагает строго одновременное выполнение задач. Несмотря на первоначальное впечатление о схожести этих понятий, следует учесть, что задачи могут быть разделены на более мелкие части, которые чередуются во времени. В таком случае конкурентность может достигаться без параллелизма, поскольку интервалы времени выполнения задач могут перекрываться. Для того чтобы говорить о параллельном выполнении задач, необходимо, чтобы они выполнялись строго одновременно. Это, в общем случае, предполагает их выполнение на различных процессорных ядрах в один и тот же момент времени.',
    ],
    img: true,
  },
  {
    id: 3,
    header: 'Однопоточный JavaScript',
    body: [
      'Исторически платформы, на которых выполнялся JavaScript, изначально не предоставляли поддержку потоков, поэтому язык был задуман как однопоточный. Сам по себе JavaScript не включает встроенных средств для создания потоков. Это вполне оправдано, поскольку аналогично отсутствуют встроенные средства для работы с сетью, устройствами, файловой системой или выполнения системных вызовов. Все эти возможности реализованы через специализированные API, предоставляемые окружением, в котором функционирует виртуальная машина (VM), такая как в Node.js или браузере.',
      'События, такие как взаимодействие с пользователем или операции ввода-вывода, активизируют выполнение функций, заранее определенных в качестве обработчиков событий. Эти функции, как правило, именуются обратными вызовами, и асинхронное программирование в Node.js и браузере строится на них. Даже при использовании обещаний или синтаксиса async/await, в основе всего лежат обратные вызовы. Важно отметить, что обратные вызовы не выполняются параллельно и не совмещаются с другим кодом. В период выполнения кода обратного вызова не выполняется никакой другой код. Можно выразить это иными словами, отметив, что в каждый момент времени активен только один стек вызовов.',
      'Таким образом, часто возникает ложное представление, будто операции выполняются параллельно, тогда как на самом деле они работают конкурентно.',
    ],
  },
  {
    id: 4,
    header: 'Выделенные исполнители',
    body: [
      'Веб-исполнители предоставляют возможность запуска новой среды выполнения JavaScript. Интерпретатор, запущенный таким образом, функционирует в отдельном потоке от того, который его инициировал. Взаимодействие между этими двумя средами осуществляется посредством передачи сообщений. Напомним, что JavaScript по своей природе является однопоточным языком. Веб-исполнители соблюдают этот принцип, а обмен сообщениями происходит через активацию функций, выполняемых в цикле событий. Среда JavaScript может запускать более одного веб-исполнителя, и сам веб-исполнитель может порождать дополнительные исполнители. Примером такого исполнителя является выделенный исполнитель.',
      'Разделяемый исполнитель представляет собой еще один тип веб-исполнителя, который доступен из различных сред браузера, таких как окна (вкладки), внутренние фреймы (iframe) и даже из других веб-исполнителей. ',
      'Сервисный исполнитель действует как посредник между одной или несколькими веб-страницами в браузере и сервером. В отличие от выделенного исполнителя, который связан с конкретной страницей, разделяемый исполнитель, который может быть ассоциирован с одной или несколькими страницами, сервисный исполнитель больше похож на разделяемый исполнитель. Сервисные исполнители даже "индексируются" аналогично разделяемым исполнителям. Однако сервисный исполнитель может существовать и работать в фоновом режиме даже после закрытия страницы. Следовательно, выделенный исполнитель можно рассматривать как связанный с одной страницей, разделяемый исполнитель — с одной или несколькими страницами, а сервисный исполнитель — с нулем или более страницами.',
    ],
  },
]