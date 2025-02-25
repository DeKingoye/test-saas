// // import { NextRequest, NextResponse } from 'next/server';
// // import prisma from '@/lib/prisma';

// // // Récupérer un questionnaire spécifique par ID
// // export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
// //   try {
// //     const questionnaire = await prisma.questionnaire.findUnique({
// //       where: { id: params.id },
// //       include: { questions: true },
// //     });

// //     if (!questionnaire) {
// //       return NextResponse.json({ error: "Questionnaire non trouvé" }, { status: 404 });
// //     }

// //     return NextResponse.json(questionnaire, { status: 200 });
// //   } catch (error) {
// //     return NextResponse.json({ error: "Erreur lors de la récupération" }, { status: 500 });
// //   }
// // }

// // // Supprimer un questionnaire spécifique par ID
// // export async function DELETE(req: NextRequest, context: { params: { id: string } }) {
// //     try {
// //       const id = context.params.id;
// //       await prisma.questionnaire.delete({ where: { id } });
// //       return NextResponse.json({ message: "Questionnaire supprimé avec succès" }, { status: 200 });
// //     } catch (error) {
// //       return NextResponse.json({ error: "Erreur lors de la suppression" }, { status: 500 });
// //     }
// //   }


// import { NextRequest, NextResponse } from 'next/server';
// import prisma from '@/lib/prisma';

// // Récupérer un questionnaire spécifique par ID
// export async function GET(req: NextRequest, context: { params: { id: string } }) {
//   try {
//     const { id } = context.params;
//     const questionnaire = await prisma.questionnaire.findUnique({
//       where: { id },
//       include: { questions: true },
//     });

//     if (!questionnaire) {
//       return NextResponse.json({ error: "Questionnaire non trouvé" }, { status: 404 });
//     }

//     return NextResponse.json(questionnaire, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error: "Erreur lors de la récupération" }, { status: 500 });
//   }
// }

// // Supprimer un questionnaire spécifique par ID
// export async function DELETE(req: NextRequest, context: { params: { id: string } }) {
//   try {
//     const { id } = context.params;
//     await prisma.questionnaire.delete({ where: { id } });
//     return NextResponse.json({ message: "Questionnaire supprimé avec succès" }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error: "Erreur lors de la suppression" }, { status: 500 });
//   }
// }


// import { NextRequest, NextResponse } from 'next/server';
// import prisma from '@/lib/prisma';

// // Récupérer un questionnaire spécifique par ID
// export async function GET(req: NextRequest, context: { params: Promise<{ id: string }> }) {
//   try {
//     const { id } = await context.params; // 👈 Ajout de await
//     const questionnaire = await prisma.questionnaire.findUnique({
//       where: { id },
//       include: { questions: true },
//     });

//     if (!questionnaire) {
//       return NextResponse.json({ error: "Questionnaire non trouvé" }, { status: 404 });
//     }

//     return NextResponse.json(questionnaire, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error: "Erreur lors de la récupération" }, { status: 500 });
//   }
// }

// // Supprimer un questionnaire spécifique par ID
// // export async function DELETE(req: NextRequest, context: { params: Promise<{ id: string }> }) {
// //   try {
// //     const { id } = await context.params; // 👈 Ajout de await
// //     await prisma.questionnaire.delete({ where: { id } });
// //     return NextResponse.json({ message: "Questionnaire supprimé avec succès" }, { status: 200 });
// //   } catch (error) {
// //     return NextResponse.json({ error: "Erreur lors de la suppression" }, { status: 500 });
// //   }
// // }

// export async function DELETE(req: NextRequest, context: { params: Promise<{ id: string }> }) {
//     try {
//       const { id } = await context.params;
//       await prisma.questionnaire.delete({ where: { id } });
//       return NextResponse.json({ message: "Questionnaire supprimé avec succès" }, { status: 200 });
//     } catch (error) {
//       console.error("Erreur lors de la suppression :", error); // 👈 Ajoute ce log
//       return NextResponse.json({ error: "Erreur lors de la suppression" }, { status: 500 });
//     }
//   }


import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// Récupérer un questionnaire spécifique par ID
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const questionnaire = await prisma.questionnaire.findUnique({
      where: { id },
      include: { questions: true },
    });

    if (!questionnaire) {
      return NextResponse.json({ error: "Questionnaire non trouvé" }, { status: 404 });
    }

    return NextResponse.json(questionnaire, { status: 200 });
  } catch (error) {
    console.error("Erreur lors de la récupération :", error);
    return NextResponse.json({ error: "Erreur lors de la récupération" }, { status: 500 });
  }
}

// Supprimer un questionnaire spécifique par ID
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    await prisma.questionnaire.delete({ where: { id } });
    return NextResponse.json({ message: "Questionnaire supprimé avec succès" }, { status: 200 });
  } catch (error) {
    console.error("Erreur lors de la suppression :", error);
    return NextResponse.json({ error: "Erreur lors de la suppression" }, { status: 500 });
  }
}
