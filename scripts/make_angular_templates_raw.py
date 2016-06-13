import os

PROJECT_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), '{{cookiecutter.github_repository_name}}')

TEMPLATE_FILE_TYPES = ['.pug', '.jade', '.html']

RAW_START_TAG = '{% raw %}\n'
RAW_END_TAG = '\n{% endraw %}'

def make_template_raw(template_file_name):
    """
    Gets the name of a template file,
    and changes it so that it will be rendered as raw by jinja.
    (Doesn't change templates that are already raw)
    :param template_file_name: The name of the file containing the template.
    :type template_file_name: str
    """
    with open(template_file_name, 'r') as template_file:
        curr_template = template_file.read()

    if curr_template.startswith(RAW_START_TAG) and curr_template.endswith(RAW_END_TAG):
        return

    raw_template = RAW_START_TAG + curr_template + RAW_END_TAG
    with open(template_file_name, 'w') as template_file:
        template_file.write(raw_template)

    print template_file_name, 'was changed to be raw !'

def make_project_templates_raw():
    """
    Changes all the templates in the project to be raw.
    """
    for dir_path, dirs, files in os.walk(PROJECT_DIR):
        for file_name in files:
            _, ext = os.path.splitext(file_name)
            if ext in TEMPLATE_FILE_TYPES:
                make_template_raw(os.path.join(dir_path, file_name))

if __name__ == '__main__':
    make_project_templates_raw()
