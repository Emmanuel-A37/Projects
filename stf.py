"""
def ascending(list):
    list -> str
    Accepts a list and returns an ordered string in ascending order
    
    i = ""
    list.sort()
    for k in range(len(list)):
        list[k] = str(list[k])
    for j in list:
        i +=j
        if j == list[-1]:
            i += "."
        else:
            i +=" < "
    return i
 

stuff =[]

x = int(input("Give me a number and when your done give me 99999\n"))
while x != 99999:
    stuff.append(x)
    x = int(input("Give me a number and when your done give me 99999\n"))
print(ascending(stuff))
"""
class Country:
    def __init__(self, name: str , pop: int, area:int )->None:
        """ A country class with a constructor tat acceps the country's
        name , population and area
        >>> canada = Country('Canada', 34482779, 9984670)
        >>> canada.name
        'Canada'
        >>> canada.population
        34482779
        >>> canada.area
        9984670 
        """
        self.name = name
        self.population = pop
        self.area = area
    
    def is_larger(self,other)-> bool:
        """
        >>> canada = Country('Canada', 34482779, 9984670)
        >>> usa = Country('United States of America', 313914040, 9826675)
        >>> canada.is_larger(usa)
        True  
        """
        return self.area > other.area
    
    def population_density(self)-> int:
        """
        >>> canada.population_density()
        3.4535722262227995
        """
        return self.population/self.area

    def __str__(self) ->str:
        """
        >>> print(usa)
        United States of America has a population of 313914040 and is 9826675
s       quare km.
        """
        return "{} has a population of {} and is {} square km".format(self.name,self.population,self.area)
 
    def __repr__(self) ->str:
        """
        >>> canada = Country('Canada', 34482779, 9984670)
        >>> canada
        Country('Canada', 34482779, 9984670)
        >>> [canada]
        [Country('Canada', 34482779, 9984670)]
        """
        return "Country({},{},{})".format(self.name,self.population,self.area)
    
class Continent:
    def __init__(self, name: int, countries: list)->None:
        self.name = name
        self.countries = countries

    def total_population(self)->int:
        total = 0
        for i in self.countries:
            total+= i.population
        return total
    
    def __str__(self)->str:
        res = ''
        for i in self.countries:
            res += str(i)
            res += "\n" 
        res = res[:-1]                   
        return "{}\n{}".format(self.name,res)

class Point:
    def __init__(self,x : int, y : int)->None:
        self.x = x
        self.y = y

class LineSegment:
    def __init__(self, one: Point, two: Point)->None:
        self.point_one = one
        self.point_two = two
    
    def slope(self)-> float:
        return (self.point_two.y - self.point_one.y) / (self.point_two.x - self.point_one.x )
    
    def length(self)->float:
        return (((self.point_two.x - self.point_one.x)**2 ) + ((self.point_two.y - self.point_one.y)) ** 2) **(1/2)
    

#segment = LineSegment(Point(1, 1), Point(3, 2))
#print(segment.length())

for i in range(1,150):
    count = 0 
    for j in range(1,int(i/2) + 1):
        if i % j == 0:
            count += 1
    if count == 1:
        print(i)
