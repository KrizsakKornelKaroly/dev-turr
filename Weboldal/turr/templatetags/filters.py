from django import template

register = template.Library()

@register.filter(name='sort_by_date')
def sort_by_date(images, reverse=False):
    """
    Sorts a list of images by date.
    """
    return sorted(images, key=lambda x: x['date'], reverse=reverse)

@register.filter(name='filter_by_date')
def filter_by_date(images, date):
    """
    Filters a list of images by a specific date.
    """
    return [image for image in images if image['timestamp'][:10] == date]