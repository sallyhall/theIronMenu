package com.theironyard;

/**
 * Created by macbookair on 11/5/15.
 */
public class menuItem {
    String name;
    String type;
    Boolean breakfast;
    Boolean lunch;
    Boolean dinner;
    double price;
    Boolean vegetarian;
    Boolean glutenFree;
    int priceRange;

    public menuItem(){}

    public String getName() {
        return name;
    }

    public String getType() {
        return type;
    }

    public Boolean getBreakfast() {
        return breakfast;
    }

    public Boolean getLunch() {
        return lunch;
    }

    public Boolean getDinner() {
        return dinner;
    }

    public double getPrice() {
        return price;
    }

    public Boolean getVegetarian() {
        return vegetarian;
    }

    public Boolean getGlutenFree() {
        return glutenFree;
    }

    public int getPriceRange() {
        return priceRange;
    }
}
