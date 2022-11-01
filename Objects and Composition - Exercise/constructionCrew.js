function consCrew(obj) {
    if (obj.dizziness == true){
        obj.levelOfHydrated += (obj.weight / 10) * obj.experience;
        obj.dizziness = false
    }
    return obj
}

consCrew({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true })