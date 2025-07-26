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
        this.schoolMembers = [];
    }
    addMember(member) {
        this.schoolMembers.push(member);
        console.log(`Principal registered: ${member.name}`);
    }
    removeMember(memberId) {
        this.schoolMembers = this.schoolMembers.filter(m => m.id !== memberId);
        console.log(`Principal deleted member with ID: ${memberId}`);
    }
    listMembers() {
        console.log('Current School Members:');
        this.schoolMembers.forEach(m => {
            console.log(`* ${m.name} [${m.constructor.name}]`);
        });
    }
    describeRole() {
        console.log(`${this.name} is the principal and oversees all operations.`);
    }
}

class Teacher extends Person {
    constructor(name, email, id, subject) {
        super(name, email, id);
        this.subject = subject;
        this.evaluatedStudents = [];
    }
    gradeStudent(studentName, grade) {
        this.evaluatedStudents.push({ studentName, grade });
        console.log(`Teacher ${this.name} evaluated ${studentName} with grade: ${grade}`);
    }
    listGradedStudents() {
        console.log(`Students evaluated by ${this.name}:`);
        this.evaluatedStudents.forEach(gs => {
            console.log(`* ${gs.studentName}: ${gs.grade}`);
        });
    }
    describeRole() {
        console.log(`${this.name} instructs the subject: ${this.subject}.`);
    }
}

class Student extends Person {
    constructor(name, email, id) {
        super(name, email, id);
        this.enrolledSubjects = [];
    }
    enrollSubject(subject) {
        this.enrolledSubjects.push(subject);
        console.log(`${this.name} has joined the subject: ${subject}.`);
    }
    viewSubjects() {
        console.log(`Subjects taken by ${this.name}:`);
        this.enrolledSubjects.forEach(s => {
            console.log(`* ${s}`);
        });
    }
    describeRole() {
        console.log(`${this.name} is a student and participates in school lessons.`);
    }
}

// Step 5: Simulate Actions
const principal = new Principal('Hassan', 'hassan@school.com', 1);
const teacher = new Teacher('Fatma', 'fatma@school.com', 2, 'Physics');
const student = new Student('Omar', 'omar@school.com', 3);

principal.addMember(teacher);
principal.addMember(student);

teacher.gradeStudent(student.name, 'B+');
student.enrollSubject('Physics');
student.enrollSubject('Art');

const schoolCommunity = [principal, teacher, student];
schoolCommunity.forEach(member => member.describeRole());
