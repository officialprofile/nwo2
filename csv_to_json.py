import sys
import pandas

pandas.read_csv("dict.csv", sep= ";").to_json("dict.json", orient='records')
