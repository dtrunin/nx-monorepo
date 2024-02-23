import { Author, Course } from './store.model';

export const mockedCoursesList: Course[] = [
  {
    id: '0d8468a2-c845-11eb-b8bc-0242ac130003',
    title: 'Python Programming',
    description:
      "Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python's design philosophy emphasizes code readability with its notable use of significant whitespace. Python has a dynamic type system and automatic memory management. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming. Python is infinitely extensible, providing the elite code accessibility to programmers, and thereby making it an enduringly popular choice among developers.",
    authors: [
      '1d8468a2-c845-11eb-b8bc-0242ac130003',
      '2d8468a2-c845-11eb-b8bc-0242ac130003',
    ],
    duration: 120,
    creationDate: '2022-09-23',
  },
  {
    id: '3d8468a2-c845-11eb-b8bc-0242ac130003',
    title: 'JavaScript and Web Development',
    description:
      'JavaScript is a first-class citizen in the world of web development. It is an object-oriented scripting language that is used in the creation of websites. JavaScript can make websites more interactive and user-friendly. Web Development encompasses creating, building, and maintaining websites. It includes aspects such as web design, web publishing, web programming, and management. It revolves around crafting sites and deploying them on the web. JavaScript plays a major role in it.',
    authors: [
      '5d8468a2-c845-11eb-b8bc-0242ac130006',
      '7cae4562-24fa-40ec-874d-8b776e0b9501',
    ],
    duration: 150,
    creationDate: '2022-09-24',
  },
  {
    id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
    title: 'Java Programming',
    description:
      'Java is a high level, robust, secured and object-oriented programming language. Originally developed by Sun Microsystems in 1995 and over time it has evolved under the Oracle Corporation. Java is platform-independent which means it is adaptable to run on any computing platform.',
    authors: [
      'eda8cf21-5361-4fa4-8e91-e3891b110d58',
      '99ef8fa9-2c68-4c4d-951e-77a41c46eefd',
    ],
    duration: 120,
    creationDate: '2021-10-01',
  },
  {
    id: '8506bcbd-4083-4c59-8b66-9f70f553fb32',
    title: 'JavaScript Programming',
    description:
      'JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.',
    authors: [
      '7cae4562-24fa-40ec-874d-8b776e0b9501',
      'b84b7996-87a3-4130-934f-be58c54dd549',
    ],
    duration: 100,
    creationDate: '2021-11-01',
  },
];

export const mockedAuthorsList: Author[] = [
  {
    id: '1d8468a2-c845-11eb-b8bc-0242ac130003',
    name: 'Guido van Rossum',
  },
  {
    id: '2d8468a2-c845-11eb-b8bc-0242ac130003',
    name: 'Brendan Eich',
  },
  {
    id: '4d8468a2-c845-11eb-b8bc-0242ac130005',
    name: 'Douglas Crockford',
  },
  {
    id: '5d8468a2-c845-11eb-b8bc-0242ac130006',
    name: 'Ryan Dahl',
  },
  {
    id: 'eda8cf21-5361-4fa4-8e91-e3891b110d58',
    name: 'John Doe',
  },
  {
    id: '99ef8fa9-2c68-4c4d-951e-77a41c46eefd',
    name: 'Jane Smith',
  },
  {
    id: '7cae4562-24fa-40ec-874d-8b776e0b9501',
    name: 'Alan Turing',
  },
  {
    id: 'b84b7996-87a3-4130-934f-be58c54dd549',
    name: 'Ada Lovelace',
  },
];
