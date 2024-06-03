class GeneticsCalculations:
    def __init__(self):
        self.genes_number = 0
        self.father_combinations = []
        self.mother_combinations = []
        self.father = ""
        self.mother = ""
        self.punnett = []

    def make_combinations(self, x, y):
        self.genes_number = len(x) // 2
        for i in range(2):
            self.father_combinations.append(x[i] + x[2])
            self.father_combinations.append(x[i] + x[3])
            self.mother_combinations.append(y[i] + y[2])
            self.mother_combinations.append(y[i] + y[3])

        if self.genes_number >= 3:
            for i in range(4):
                for a in range(4, 6):
                    self.father_combinations.append(self.father_combinations[i] + x[a])
                    self.mother_combinations.append(self.mother_combinations[i] + y[a])
            self.father_combinations[:4], self.mother_combinations[:4] = [], []
        if self.genes_number >= 4:
            for i in range(8):
                for j in range(6, 8):
                    self.father_combinations.append(self.father_combinations[i] + x[j])
                    self.mother_combinations.append(self.mother_combinations[i] + y[j])
            self.father_combinations[:8], self.mother_combinations[:8] = [], []
        if self.genes_number >= 5:
            for i in range(16):
                for j in range(8, 10):
                    self.father_combinations.append(self.father_combinations[i] + x[j])
                    self.mother_combinations.append(self.mother_combinations[i] + y[j])
            self.father_combinations[:16], self.mother_combinations[:16] = [], []
        if self.genes_number >= 6:
            for i in range(32):
                for j in range(10, 12):
                    self.father_combinations.append(self.father_combinations[i] + x[j])
                    self.mother_combinations.append(self.mother_combinations[i] + y[j])
            self.father_combinations[:32], self.mother_combinations[:32] = [], []
        if self.genes_number >= 7:
            for i in range(64):
                for j in range(12, 14):
                    self.father_combinations.append(self.father_combinations[i] + x[j])
                    self.mother_combinations.append(self.mother_combinations[i] + y[j])
            self.father_combinations[:64], self.mother_combinations[:64] = [], []

    def doEverything(self, father, mother):
        self.father = father
        self.mother = mother
        if self.validate():
            self.make_combinations(father, mother)
            all_combinations = self.power()
            self.gui(all_combinations)

    def power(self):
        for i in range(2**self.genes_number):
            j = 0
            while j < 2**self.genes_number:
                combination = self.mother_combinations[i] + self.father_combinations[j]
                genes = list(combination)
                genes.sort(key=lambda x: (x.upper(), x[0].islower()))
                self.punnett.append(''.join(genes))
                genes[:len(self.father)] = []
                j += 1
        all_combinations, k = [], 0
        for i in range(len(self.punnett)):
            if i == len(self.father_combinations) * k:
                all_combinations.append(self.mother_combinations[k])
                k += 1
            all_combinations.append(self.punnett[i])
        print("\033[1mTodas las combinaciones: \033[0m", all_combinations)
        return all_combinations


    def gui(self, combinations):
        # Implementa la función gui si es necesario
        pass
