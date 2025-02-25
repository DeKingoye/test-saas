// // // 'use client';

// // // import Link from 'next/link';
// // // import Wrapper from './components/Wrapper';

// // // export default function HomePage() {
// // //   return (
// // //     <Wrapper>
// // //     <main className="container mx-auto p-6">
// // //       <h1 className="text-3xl font-bold mb-4">Bienvenue sur l'outil de Questionnaires</h1>
// // //       <p className="mb-6">
// // //         Créez des questionnaires interactifs, collectez des réponses, et analysez facilement les résultats.
// // //       </p>
// // //       <div className="flex space-x-4">
// // //         <Link href="/questionnaire/create">
// // //           <button className="bg-blue-500 text-white px-4 py-2 rounded">
// // //             Créer un questionnaire
// // //           </button>
// // //         </Link>
// // //         <Link href="/results">
// // //           <button className="bg-gray-500 text-white px-4 py-2 rounded">
// // //             Voir les résultats
// // //           </button>
// // //         </Link>
// // //       </div>
// // //     </main>
// // //     </Wrapper>
// // //   );
// // // }



// // // 'use client';

// // // import Link from 'next/link';
// // // import Wrapper from './components/Wrapper';
// // // import { useEffect } from 'react';

// // // export default function HomePage() {
  
// // //   useEffect(() => {
// // //     async function createQuestionnaire() {
// // //       await fetch('/api/questionnaire', {
// // //         method: 'POST',
// // //         body: JSON.stringify({
// // //           title: "Évaluation de la Formation",
// // //           questions: [
// // //             { text: "Avez-vous trouvé la formation utile ?", type: "TRUE_FALSE" },
// // //             { text: "Comment évaluez-vous le formateur ?", type: "MULTIPLE_CHOICE" },
// // //             { text: "Suggestions d'amélioration ?", type: "TEXT" },
// // //           ]
// // //         }),
// // //       });
// // //     }

// // //     createQuestionnaire();
// // //   }, []);

// // //   return (
// // //     <Wrapper>
// // //       <main className="container mx-auto p-6">
// // //         <h1 className="text-3xl font-bold mb-4">Bienvenue sur l'outil de Questionnaires</h1>
// // //         <p className="mb-6">
// // //           Créez des questionnaires interactifs, collectez des réponses, et analysez facilement les résultats.
// // //         </p>
// // //         <div className="flex space-x-4">
// // //           <Link href="/questionnaire/create">
// // //             <button className="bg-blue-500 text-white px-4 py-2 rounded">
// // //               Créer un questionnaire
// // //             </button>
// // //           </Link>
// // //           <Link href="/results">
// // //             <button className="bg-gray-500 text-white px-4 py-2 rounded">
// // //               Voir les résultats
// // //             </button>
// // //           </Link>
// // //         </div>
// // //       </main>
// // //     </Wrapper>
// // //   );
// // // }


// // // // avec affichage niveau front: 

// // // 'use client';

// // // import Link from 'next/link';
// // // import Wrapper from './components/Wrapper';
// // // import { useEffect, useState } from 'react';

// // // export default function HomePage() {
// // //   const [questions, setQuestions] = useState([
// // //     { text: "Avez-vous trouvé la formation utile ?", type: "TRUE_FALSE" },
// // //     { text: "Comment évaluez-vous le formateur ?", type: "MULTIPLE_CHOICE" },
// // //     { text: "Suggestions d'amélioration ?", type: "TEXT" },
// // //   ]);

// // //   async function createQuestionnaire() {
// // //     await fetch('/api/questionnaire', {
// // //       method: 'POST',
// // //       body: JSON.stringify({
// // //         title: "Évaluation de la Formation",
// // //         questions,
// // //       }),
// // //     });
// // //     alert('Questionnaire créé avec succès !');
// // //   }

// // //   return (
// // //     <Wrapper>
// // //       <main className="container mx-auto p-6">
// // //         <h1 className="text-3xl font-bold mb-4">Bienvenue sur l'outil de Questionnaires</h1>
// // //         <p className="mb-6">
// // //           Créez des questionnaires interactifs, collectez des réponses, et analysez facilement les résultats.
// // //         </p>

// // //         <h2 className="text-xl font-semibold mb-2">Questions du questionnaire :</h2>
// // //         <ul className="mb-6 list-disc pl-5">
// // //           {questions.map((q, index) => (
// // //             <li key={index}>{q.text} ({q.type})</li>
// // //           ))}
// // //         </ul>

// // //         <div className="flex space-x-4">
// // //           <button
// // //             onClick={createQuestionnaire}
// // //             className="bg-blue-500 text-white px-4 py-2 rounded"
// // //           >
// // //             Créer un questionnaire
// // //           </button>
// // //           <Link href="/results">
// // //             <button className="bg-gray-500 text-white px-4 py-2 rounded">
// // //               Voir les résultats
// // //             </button>
// // //           </Link>
// // //         </div>
// // //       </main>
// // //     </Wrapper>
// // //   );
// // // }


// // // 'use client';

// // // import Link from 'next/link';
// // // import Wrapper from './components/Wrapper';
// // // import { useState } from 'react';

// // // export default function HomePage() {
// // //   const [questions, setQuestions] = useState([
// // //     { text: "", type: "TEXT" },
// // //   ]);

// // //   function handleQuestionChange(index: number, field: string, value: string) {
// // //     const updatedQuestions = [...questions];
// // //     updatedQuestions[index][field] = value;
// // //     setQuestions(updatedQuestions);
// // //   }

// // //   function addQuestion() {
// // //     setQuestions([...questions, { text: "", type: "TEXT" }]);
// // //   }

// // //   async function createQuestionnaire() {
// // //     await fetch('/api/questionnaire', {
// // //       method: 'POST',
// // //       body: JSON.stringify({
// // //         title: "Évaluation de la Formation",
// // //         questions,
// // //       }),
// // //     });
// // //     alert('Questionnaire créé avec succès !');
// // //   }

// // //   return (
// // //     <Wrapper>
// // //       <main className="container mx-auto p-6">
// // //         <h1 className="text-3xl font-bold mb-4">Bienvenue sur l'outil de Questionnaires</h1>
// // //         <p className="mb-6">
// // //           Créez des questionnaires interactifs, collectez des réponses, et analysez facilement les résultats.
// // //         </p>

// // //         <h2 className="text-xl font-semibold mb-2">Créer un nouveau questionnaire :</h2>
// // //         {questions.map((q, index) => (
// // //           <div key={index} className="mb-4">
// // //             <input
// // //               type="text"
// // //               placeholder="Texte de la question"
// // //               className="border rounded p-2 w-full mb-2"
// // //               value={q.text}
// // //               onChange={(e) => handleQuestionChange(index, 'text', e.target.value)}
// // //             />
// // //             <select
// // //               className="border rounded p-2 w-full"
// // //               value={q.type}
// // //               onChange={(e) => handleQuestionChange(index, 'type', e.target.value)}
// // //             >
// // //               <option value="TEXT">Texte libre</option>
// // //               <option value="TRUE_FALSE">Vrai / Faux</option>
// // //               <option value="MULTIPLE_CHOICE">Choix multiples</option>
// // //             </select>
// // //           </div>
// // //         ))}
// // //         <button
// // //           onClick={addQuestion}
// // //           className="bg-green-500 text-white px-4 py-2 rounded mb-4"
// // //         >
// // //           Ajouter une question
// // //         </button>

// // //         <div className="flex space-x-4">
// // //           <button
// // //             onClick={createQuestionnaire}
// // //             className="bg-blue-500 text-white px-4 py-2 rounded"
// // //           >
// // //             Créer le questionnaire
// // //           </button>
// // //           <Link href="/results">
// // //             <button className="bg-gray-500 text-white px-4 py-2 rounded">
// // //               Voir les résultats
// // //             </button>
// // //           </Link>
// // //         </div>
// // //       </main>
// // //     </Wrapper>
// // //   );
// // // }


// // 'use client';

// // import Link from 'next/link';
// // import Wrapper from './components/Wrapper';
// // import { useState } from 'react';

// // export default function HomePage() {
// //   const [questions, setQuestions] = useState([
// //     { text: "", type: "TEXT" },
// //   ]);
// //   const [preview, setPreview] = useState(false);

// //   function handleQuestionChange(index: number, field: string, value: string) {
// //     const updatedQuestions = [...questions];
// //     updatedQuestions[index][field] = value;
// //     setQuestions(updatedQuestions);
// //   }

// //   function addQuestion() {
// //     setQuestions([...questions, { text: "", type: "TEXT" }]);
// //   }

// //   async function createQuestionnaire() {
// //     await fetch('/api/questionnaire', {
// //       method: 'POST',
// //       body: JSON.stringify({
// //         title: "Évaluation de la Formation",
// //         questions,
// //       }),
// //     });
// //     alert('Questionnaire créé avec succès !');
// //   }

// //   function togglePreview() {
// //     setPreview(!preview);
// //   }

// //   return (
// //     <Wrapper>
// //       <main className="container mx-auto p-6">
// //         <h1 className="text-3xl font-bold mb-4">Bienvenue sur l'outil de Questionnaires</h1>
// //         <p className="mb-6">
// //           Créez des questionnaires interactifs, collectez des réponses, et analysez facilement les résultats.
// //         </p>

// //         <h2 className="text-xl font-semibold mb-2">Créer un nouveau questionnaire :</h2>

// //         {!preview ? (
// //           <>
// //             {questions.map((q, index) => (
// //               <div key={index} className="mb-4">
// //                 <input
// //                   type="text"
// //                   placeholder="Texte de la question"
// //                   className="border rounded p-2 w-full mb-2"
// //                   value={q.text}
// //                   onChange={(e) => handleQuestionChange(index, 'text', e.target.value)}
// //                 />
// //                 <select
// //                   className="border rounded p-2 w-full"
// //                   value={q.type}
// //                   onChange={(e) => handleQuestionChange(index, 'type', e.target.value)}
// //                 >
// //                   <option value="TEXT">Texte libre</option>
// //                   <option value="TRUE_FALSE">Vrai / Faux</option>
// //                   <option value="MULTIPLE_CHOICE">Choix multiples</option>
// //                 </select>
// //               </div>
// //             ))}
// //             <button
// //               onClick={addQuestion}
// //               className="bg-green-500 text-white px-4 py-2 rounded mb-4"
// //             >
// //               Ajouter une question
// //             </button>
// //           </>
// //         ) : (
// //           <>
// //             <h3 className="text-lg font-semibold mb-2">Prévisualisation :</h3>
// //             <ul className="list-disc pl-5 mb-4">
// //               {questions.map((q, index) => (
// //                 <li key={index}>{q.text} ({q.type})</li>
// //               ))}
// //             </ul>
// //           </>
// //         )}

// //         <div className="flex space-x-4">
// //           <button
// //             onClick={togglePreview}
// //             className="bg-gray-400 text-white px-4 py-2 rounded"
// //           >
// //             {preview ? "Modifier" : "Prévisualiser"}
// //           </button>
// //           <button
// //             onClick={createQuestionnaire}
// //             className="bg-blue-500 text-white px-4 py-2 rounded"
// //           >
// //             Créer le questionnaire
// //           </button>
// //           <Link href="/results">
// //             <button className="bg-gray-500 text-white px-4 py-2 rounded">
// //               Voir les résultats
// //             </button>
// //           </Link>
// //         </div>
// //       </main>
// //     </Wrapper>
// //   );
// // }


// 'use client';

// import Link from 'next/link';
// import Wrapper from './components/Wrapper';

// export default function HomePage() {
//   return (
//     <Wrapper>
//       <main className="container mx-auto p-6">
//         <h1 className="text-3xl font-bold mb-4">Bienvenue sur l'outil de Questionnaires</h1>
//         <p className="mb-6">
//           Créez des questionnaires interactifs, collectez des réponses, et analysez facilement les résultats.
//         </p>

//         <div className="flex space-x-4">
//           <Link href="/questionnaire/create">
//             <button className="bg-blue-500 text-white px-4 py-2 rounded">
//               Créer un questionnaire
//             </button>
//           </Link>
//           <Link href="/questionnaire/preview">
//             <button className="bg-green-500 text-white px-4 py-2 rounded">
//               Prévisualiser le questionnaire
//             </button>
//           </Link>
//           <Link href="/results">
//             <button className="bg-gray-500 text-white px-4 py-2 rounded">
//               Voir les résultats
//             </button>
//           </Link>
//         </div>
//       </main>
//     </Wrapper>
//   );
// }


'use client';

import Link from 'next/link';
import Wrapper from './components/Wrapper';

export default function HomePage() {
  return (
    <Wrapper>
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Bienvenue sur l'outil de Questionnaires</h1>
        <p className="mb-6">
          Créez des questionnaires interactifs, collectez des réponses, et analysez facilement les résultats.
        </p>

        <div className="flex space-x-4">
          <Link href="/questionnaire/create">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Créer un questionnaire
            </button>
          </Link>
          <Link href="/questionnaire/preview">
            <button className="bg-green-500 text-white px-4 py-2 rounded">
              Prévisualiser le questionnaire
            </button>
          </Link>
          <Link href="/results">
            <button className="bg-gray-500 text-white px-4 py-2 rounded">
              Voir les résultats
            </button>
          </Link>
          <Link href="/questionnaire/all">
            <button className="bg-purple-500 text-white px-4 py-2 rounded">
              Tous les questionnaires
            </button>
          </Link>
        </div>
      </main>
    </Wrapper>
  );
}
