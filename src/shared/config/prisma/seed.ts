import { faker } from '@faker-js/faker';

import { prisma } from '@/shared/config/prisma/prisma';

async function main() {
  for (let i = 0; i < 50; i++) {
    const user = await prisma.user.create({
      data: {
        companyName: faker.company.name(),
        email: `user${i}_${faker.internet.email()}`,
        phoneNumber: faker.phone.number(),
        passwordHash: faker.string.alpha(10),
        imageUrl: faker.image.avatar(),
      },
    });

    // Create an offer for this user
    await prisma.offer.create({
      data: {
        title: faker.person.jobTitle(),
        location: faker.location.city(),
        employmentType: faker.helpers.arrayElement([
          'full-time',
          'part-time',
          'contract',
          'freelance',
          'internship',
        ]),
        minSalary: faker.number.int({ min: 20, max: 60 }),
        maxSalary: faker.number.int({ min: 61, max: 120 }),
        description: faker.lorem.paragraph(),
        requirements: faker.lorem.sentence(),
        benefits: faker.lorem.sentence(),
        tags: faker.helpers.arrayElements(
          ['React', 'Node.js', 'Remote', 'Senior', 'TypeScript', 'API', 'SQL'],
          { min: 2, max: 4 },
        ),
        userId: user.id,
      },
    });
  }

  console.log('Seeded 50 users and 50 offers!');
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
