// Task-1 🎓 School Management System

class Person {
    #email;
    #id;
    constructor(name, email, id) {
        this.name = name;
        this.#email = email;
        this.#id = id;
    }
    get email() {
        return this.#email;
    }
    set email(newEmail) {
        if (typeof newEmail === 'string' && newEmail.includes('@')) {
            this.#email = newEmail;
        } else {
            throw new Error('Invalid email');
        }
    }
    get id() {
        return this.#id;
    }
    set id(newId) {
        if (Number.isInteger(newId) && newId > 0) {
            this.#id = newId;
        } else {
            throw new Error('Invalid ID');
        }
    }
    describeRole() {
        console.log(`${this.name} is a school member.`);
    }
}

class Principal extends Person {
    constructor(name, email, id) {
        super(name, email, id);
        this.members = [];
    }
    addMember(member) {
        this.members.push(member);
        console.log(`Principal added member: ${member.name}`);
    }
    removeMember(memberId) {
        this.members = this.members.filter(m => m.id !== memberId);
        console.log(`Principal removed member with ID: ${memberId}`);
    }
    listMembers() {
        console.log('School Members:');
        this.members.forEach(m => {
            console.log(`- ${m.name} (${m.constructor.name})`);
        });
    }
    describeRole() {
        console.log(`${this.name} is the principal and manages the school.`);
    }
}

class Teacher extends Person {
    constructor(name, email, id, subject) {
        super(name, email, id);
        this.subject = subject;
        this.gradedStudents = [];
    }
    gradeStudent(studentName, grade) {
        this.gradedStudents.push({ studentName, grade });
        console.log(`Teacher ${this.name} graded ${studentName}: ${grade}`);
    }
    listGradedStudents() {
        console.log(`Graded Students by ${this.name}:`);
        this.gradedStudents.forEach(gs => {
            console.log(`- ${gs.studentName}: ${gs.grade}`);
        });
    }
    describeRole() {
        console.log(`${this.name} teaches ${this.subject}.`);
    }
}

class Student extends Person {
    constructor(name, email, id) {
        super(name, email, id);
        this.subjects = [];
    }
    enrollSubject(subject) {
        this.subjects.push(subject);
        console.log(`${this.name} enrolled in ${subject}.`);
    }
    viewSubjects() {
        console.log(`Subjects for ${this.name}:`);
        this.subjects.forEach(s => {
            console.log(`- ${s}`);
        });
    }
    describeRole() {
        console.log(`${this.name} is a student and attends classes.`);
    }
}

// Step 5: Simulate Actions
const principal = new Principal('Ahmed', 'ahmed@school.com', 1);
const teacher = new Teacher('Mohamed', 'mohamed@school.com', 2, 'Mathematics');
const student = new Student('Youssef', 'youssef@school.com', 3);

principal.addMember(teacher);
principal.addMember(student);

teacher.gradeStudent(student.name, 'A');
student.enrollSubject('Mathematics');
student.enrollSubject('Science');

const allMembers = [principal, teacher, student];
allMembers.forEach(m => m.describeRole());
