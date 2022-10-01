import matplotlib.pyplot as plt
import numpy as np

x = np.arange(3)
years = ['2018', '2019', '2020']
values = [120, 390, 700]

plt.bar(x, values)
plt.xticks(x, years)

plt.show()