from collections import Counter

class GeneticsCalculations:
    def __init__(self):
        self.genes_number = 0
        self.father_combinations = []
        self.mother_combinations = []
        self.father = ""
        self.mother = ""
        self.punnett = []
        self.power_executed = False

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
        if not self.power_executed:
            self.make_combinations(father, mother)
            all_combinations = self.power()
            self.power_executed = True
            return all_combinations
        else:
            self.power_executed = False
            return self.doEverything(father, mother)

    def power(self):
        for i in range(2 ** self.genes_number):
            j = 0
            while j < 2 ** self.genes_number:
                if i < len(self.mother_combinations) and j < len(self.father_combinations):
                    combination = self.mother_combinations[i] + self.father_combinations[j]
                    genes = list(combination)
                    genes.sort(key=lambda x: (x.upper(), x[0].islower()))
                    self.punnett.append(''.join(genes))
                    genes[:len(self.father)] = []
                else:
                    print("Índices fuera de rango")
                j += 1

        all_combinations, k = [], 0
        for i in range(len(self.punnett)):
            all_combinations.append(self.punnett[i])
        total_combinations = len(all_combinations)

        # Contar la frecuencia de cada combinación
        combinations_counter = Counter(all_combinations)

        # Ordenar las combinaciones por frecuencia de ocurrencia
        sorted_combinations = combinations_counter.most_common()

        # Calcular las probabilidades
        combinations_with_probabilities = [
            (combination, count, (count / total_combinations) * 100) for combination, count in sorted_combinations
        ]

        # Obtener las más comunes y las menos comunes
        most_common_combinations = combinations_with_probabilities[:5]
        least_common_combination = combinations_with_probabilities[-1] if combinations_with_probabilities else None

        return {
            "total_combinations": total_combinations,
            "most_common": most_common_combinations,
            "least_common": least_common_combination
        }
